function Embed({channel}){       //we have directly used the variable instead of prop.channel
   return(
   <>
 <div class="w-60 h-80 bg-neutral-800 rounded-3xl text-neutral-300 p-4 flex flex-col items-start justify-center gap-3 hover:bg-gray-900 hover:shadow-2xl hover:shadow-sky-400 transition-shadow">
  <div class="w-52 h-40 bg-sky-300 rounded-2xl"></div>
  <div class="">
      <p class="font-extrabold">{channel}</p>
      <p class="">4 popular types of cards in UI design.</p>
  </div>
  <button class="bg-sky-700 font-extrabold p-2 px-6 rounded-xl hover:bg-sky-500 transition-colors">See more</button>
</div>
</>)
}
export default Embed