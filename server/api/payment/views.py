from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from django.contrib.auth.decorators import login_required
from django.contrib.auth import get_user_model
from django.views.decorators.csrf import csrf_exempt

import braintree

gateway = braintree.BraintreeGateway(
    braintree.Configuration(
        braintree.Environment.Sandbox,
        merchant_id="ybvkhd344yb9xhvz",
        public_key="bs943z5d593w7jj4",
        private_key="7bfe71e2830c0c5b8d5f2696526442a6"
    )
)


@csrf_exempt
def generate_token(request, id, token):
    if not validate_user_session(id, token):
        return JsonResponse({'error': 'Invalid session. Please login again!'})
    try:
        client_token = gateway.client_token.generate()
        return JsonResponse({'success': True, 'client_token': client_token})
    except Exception:
        return JsonResponse({'error': 'Oops could not process your request, try again later!'})


@csrf_exempt
def process_payment(request, id, token):
    if not validate_user_session(id, token):
        return JsonResponse({'error': 'Invalid session. Please login again!'})
    nonce_from_the_client = request.POST['payment_method_nonce']
    amount_from_the_client = request.POST['amount']

    try:
        result = gateway.transaction.sale({
            "amount": amount_from_the_client,
            "payment_method_nonce": nonce_from_the_client,
            "options": {
                "submit_for_settlement": True
            }
        })
        if result.is_success:  # a bit redundant here though (...just double checking)
            return JsonResponse(
                {'success': True, 'transaction': {"id": result.transaction.id, "amount": result.transaction.amount}})

    except Exception:  # transaction failed
        return JsonResponse({'success': False, 'error': 'Oops could not process your request, try again later!'})


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

# nonce is a confirmation sent to your server from front end along with the amount that needs tobe deducted
