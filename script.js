const channels = [
  {name:"ATN Bangla",short:"ATN",category:"Bangladesh",color:"#f4b400"},
  {name:"DBC News",short:"DBC",category:"News",color:"#e33136"},
  {name:"Channel 24",short:"24",category:"Bangladesh",color:"#ff7c26"},
  {name:"Somoy TV",short:"সময়",category:"News",color:"#d52637"},
  {name:"Bangla Vision",short:"BV",category:"Bangladesh",color:"#e5303d"},
  {name:"Gazi TV",short:"GTV",category:"Sports",color:"#2469b7"},
  {name:"My TV",short:"myTV",category:"Bangladesh",color:"#20b9a7"},
  {name:"RTV",short:"RTV",category:"Bangladesh",color:"#2689e8"},
  {name:"NTV",short:"NTV",category:"Bangladesh",color:"#55b94e"},
  {name:"Ekattor TV",short:"71",category:"News",color:"#df2d43"},
  {name:"Star Sports",short:"STAR",category:"Sports",color:"#7d9bea"},
  {name:"Sony Sports",short:"SONY",category:"Sports",color:"#4a82e8"},
  {name:"T Sports",short:"T",category:"Sports",color:"#e02d45"},
  {name:"ESPN",short:"ESPN",category:"Sports",color:"#f02b3a"},
  {name:"SET Max",short:"MAX",category:"Movies",color:"#eab12c"},
  {name:"Ananda TV",short:"Ananda",category:"India",color:"#e44d9b"},
  {name:"Colors Bangla",short:"Colors",category:"India",color:"#f07837"},
  {name:"Discovery",short:"DISC",category:"International",color:"#3998db"},
  {name:"Cartoon Network",short:"CN",category:"Kids",color:"#e9b92e"},
  {name:"Music Bangla",short:"♫",category:"Music",color:"#e34b87"}
];

const grid = document.getElementById("channelGrid");
const count = document.getElementById("channelCount");
const search = document.getElementById("channelSearch");
let activeCategory = "All";

function renderChannels(){
  const query = search.value.trim().toLowerCase();
  const filtered = channels.filter(channel => {
    const matchesCategory = activeCategory === "All" ||
      channel.category === activeCategory ||
      (activeCategory === "Entertainment" && ["Movies","Series","Kids","Music"].includes(channel.category));
    return matchesCategory && channel.name.toLowerCase().includes(query);
  });
  grid.innerHTML = "";
  filtered.forEach(channel => {
    const card = document.createElement("button");
    card.className = "channel-card";
    card.type = "button";
    card.innerHTML = `<span class="channel-logo" style="color:${channel.color}">${channel.short}</span><strong>${channel.name}</strong><small>● ${channel.category}</small>`;
    card.addEventListener("click", () => {
      document.querySelectorAll(".channel-card").forEach(item => item.classList.remove("selected"));
      card.classList.add("selected");
      document.querySelector(".match-center small").textContent = `${channel.name} নির্বাচন করা হয়েছে`;
      document.querySelector(".live-pill").innerHTML = `<span></span> ${channel.name}`;
      document.getElementById("player").scrollIntoView({behavior:"smooth",block:"center"});
    });
    grid.appendChild(card);
  });
  count.textContent = `${filtered.length}টি চ্যানেল`;
  if(!filtered.length) grid.innerHTML = '<p class="empty">কোনো চ্যানেল পাওয়া যায়নি। অন্য নামে খুঁজুন।</p>';
}

document.querySelectorAll(".category").forEach(button => {
  button.addEventListener("click", () => {
    activeCategory = button.dataset.category;
    document.querySelectorAll(".category").forEach(item => item.classList.toggle("active", item === button));
    renderChannels();
  });
});
document.querySelectorAll(".category-list button").forEach(button => {
  button.addEventListener("click", () => {
    const category = button.dataset.category;
    activeCategory = ["Bangladesh","India","Sports","News","Entertainment"].includes(category) ? category : "All";
    document.querySelectorAll(".category").forEach(item => item.classList.toggle("active", item.dataset.category === activeCategory));
    renderChannels();
    document.querySelector(".channels-section").scrollIntoView({behavior:"smooth",block:"start"});
  });
});
search.addEventListener("input", renderChannels);
document.getElementById("dismissNotice").addEventListener("click", () => document.querySelector(".notice").remove());
document.getElementById("playButton").addEventListener("click", () => {
  document.querySelector(".match-center small").textContent = "ডেমো প্লেয়ার — চ্যানেল নির্বাচন করুন";
});
renderChannels();
