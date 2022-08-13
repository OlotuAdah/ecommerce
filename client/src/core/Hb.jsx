import React from "react";

function Hb() {
  return (
    <div>
      <div class="relative h-screen w-full shadow-sm shadow-amber-500">
        <img
          src="/img/music-group.jpg"
          alt="group-toast"
          class="w-full h-full object-cover"
        />
        {/* <!-- dark overlay on the featured image --> */}
        <div className={`absolute inset-0 bg-black/80`}></div>
      </div>
    </div>
  );
}

export default Hb;
