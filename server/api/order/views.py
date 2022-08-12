from rest_framework import viewsets
from django.http import JsonResponse

from django.contrib.auth import get_user_model
from django.views.decorators.csrf import csrf_exempt

from .serializer import OrderSerializer
from .models import Order


def validate_user_session(id, token):
    UserModel = get_user_model()
    try:
        user = UserModel.objects.get(pk=id)
        # match user-supplied token with user token fetched from model
        if user.session_token != token:
            return False
        return True
    except UserModel.DoesNotExist:
        return False


@csrf_exempt
def add_user_supplied_details(request, id, token):  # used on the order/add<int:id>
    # confirm that user is authenticated before adding her details
    if not validate_user_session(id, token):
        return JsonResponse({'error': 'Please login again!'})
    if request.method == "POST":
        user_id = id
        transaction_id = request.POST['transaction_id']
        total_amount = request.POST['amount']
        products_names = request.POST['products']
        total_product = len(products_names.split(",")[:-1])
        UserModel = get_user_model()

        try:
            user = UserModel.objects.get(pk=user_id)
        except UserModel.DoesNotExist:
            return JsonResponse({'error': 'User does not exist!'})
        # create an Order instance
        order_instance = Order(user=user, product_names=products_names, total_product=total_product,
                               total_amount=total_amount, transaction_id=transaction_id)
        order_instance.save()
        return JsonResponse({'success': True, 'msg': 'Order placed successfully!'})


class OrderViewSet(viewsets.ModelViewSet):
    queryset = Order.objects.all().order_by('id')
    serializer_class = OrderSerializer
