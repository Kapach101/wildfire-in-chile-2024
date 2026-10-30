const speakers = [
  {
    title: "The event and the weather",
    time: "About 2 minutes 10 seconds",
    paragraphs: [
      "Good morning, everyone. Our group studied the wildfires in Chile in February 2024.",
      "On Friday, February 2nd, 2024, several fires started in the hills near Viña del Mar, in the Valparaíso Region. In just a few hours, the fire reached the neighbourhoods of Viña del Mar, Quilpué and Villa Alemana. Some areas, like El Olivar and Villa Independencia, were almost completely burned.",
      "The numbers are shocking. 138 people died. Around 9,300 hectares burned, and about one third of the city of Viña del Mar was affected. More than 1,000 people were injured and around 40,000 had to leave their homes. Thousands of homes were destroyed, and thousands of families lost everything in one afternoon. Even the Botanical Garden of Viña del Mar burned.",
      "President Gabriel Boric said it was the biggest tragedy in Chile since the 2010 earthquake. So this was not only a forest fire. It was an urban disaster.",
      "So, why was this fire so destructive? Based on the evidence, there were two groups of factors: the weather and vulnerability.",
      "First, the weather. Chile has been in a mega-drought for more than ten years, so the vegetation was extremely dry. On top of that, El Niño brought a heat wave, with temperatures close to 40 degrees. And on February 2nd the wind was very strong, around 45 kilometres per hour.",
      "Experts talk about the “30-30-30 rule”: more than 30 degrees, less than 30 percent humidity, and wind over 30 kilometres per hour. When these three things happen together, a fire spreads extremely fast. That day, all three happened.",
      "Now our second speaker will explain the human side of the disaster."
    ]
  },
  {
    title: "Vulnerability and human decisions",
    time: "About 2 minutes",
    paragraphs: [
      "The weather explains how the fire spread, but not why so many people died. First, vulnerability. Many of the burned neighbourhoods were on hills and in ravines, right next to pine and eucalyptus plantations. A lot of houses were self-built, with narrow streets and only one way out. Many victims were elderly people who could not escape in time. So the people most affected were the people with the fewest resources.",
      "Second, human decisions made it worse, before, during and after the fire.",
      "Before: the fire was not an accident. Investigators found several ignition points at the same time. In May 2024, the police arrested a volunteer firefighter and a worker from CONAF, the national forest agency. According to the prosecutors, they planned the fire, possibly to earn more money from extra hours. Today, nine people are accused, and the trial started this October in Valparaíso. Also, for years, cities allowed houses to grow next to dry forests without firebreaks.",
      "During: the emergency alerts were confusing. Many people received a message on their phones, but it did not clearly tell them to leave. When people finally escaped, the narrow roads were blocked. There are photos of long lines of burned cars.",
      "After: reconstruction has been slow, and experts warn that some areas could burn again.",
      "So our main point is this: the weather was the fuel, but human decisions decided how many people died. Now our third speaker will present our action plan."
    ]
  },
  {
    title: "Our priority action plan",
    time: "About 2 minutes",
    paragraphs: [
      "Based on this evidence, our group chose three priority actions.",
      "Action one: firebreaks and vegetation control around neighbourhoods. This means cleaning dry grass, removing pines and eucalyptus near houses, and keeping a strip of land with no fuel between the forest and the city. We prioritized this because the fire entered the city from the hills. With less fuel, the fire is slower and firefighters have more time.",
      "Action two: a clear evacuation plan for every hill neighbourhood. Each community should have marked escape routes, meeting points, and a drill at least once a year, before summer. Elderly people and people with disabilities need a neighbour assigned to help them. We prioritized this because many victims died at home or in their cars while trying to escape.",
      "Action three: safer land-use planning. The government should map high-risk zones, stop new houses in the most dangerous ravines, and help families who already live there to move to safer housing. This is the most difficult action, but it is the only one that reduces the risk in the long term.",
      "We think these actions are realistic because they cost much less than the disaster itself, and the municipality can do them together with the community.",
      "To check if these actions work, we propose simple goals: a firebreak around every high-risk neighbourhood before December, one drill per year, and a public risk map updated every year.",
      "That way, people can measure real progress, not only listen to promises. Now our last speaker will talk about technology."
    ]
  },
  {
    title: "Technology and conclusion",
    time: "About 2 minutes 15 seconds",
    paragraphs: [
      "Now, technology. We selected two tools.",
      "The first is an early warning system with cell-broadcast messages. Chile already has one, called SAE. The technology worked, because the messages arrived. The problem was the message itself: it has to say clearly “evacuate now” and tell people which way to go. The dangerous weather was forecast about five days before, so a clear warning could reduce the impact by giving people more time.",
      "The second tool is early detection: cameras with artificial intelligence and satellites that detect smoke in the first minutes, and drones with thermal cameras that show where the fire is moving. A fire detected in ten minutes is much easier to control than one detected after an hour.",
      "[Point at the red box] However, technology has limitations. Antennas can burn and the signal can fail. Some elderly people do not have smartphones. Cameras and drones are expensive and need trained people. And no technology can stop a fire that someone starts on purpose on a very windy day. So technology helps, but it cannot replace planning and community preparation.",
      "To conclude: the 2024 fires in Chile show that a disaster is not only nature. It is hazard, plus vulnerability, plus human decisions. Heat, drought and wind made the fire possible, but poor planning, confusing alerts and an intentional attack turned it into one of the deadliest fires in Chile’s history.",
      "Our main lesson is that prevention must happen before summer, not during the fire: clean the fuel, plan the escape routes, send clear messages, and build in safer places. With climate change these conditions will be more common, and not only in Chile. Uruguay also has hot, dry summers and forest plantations close to cities.",
      "Thank you for listening. We are ready for your questions."
    ]
  }
];

const menu = document.getElementById("menu");
const oral = document.getElementById("oral");
const oralTitle = document.getElementById("oral-title");
const oralTime = document.getElementById("oral-time");
const oralText = document.getElementById("oral-text");
const speakerLabel = document.getElementById("speaker-label");
const previous = document.getElementById("previous");
const next = document.getElementById("next");
let currentSpeaker = 0;

function showSpeaker(index) {
  currentSpeaker = index;
  const speaker = speakers[index];
  menu.classList.add("hidden");
  oral.classList.remove("hidden");
  speakerLabel.textContent = `SPEAKER ${index + 1}`;
  oralTitle.textContent = speaker.title;
  oralTime.textContent = speaker.time;
  oralText.replaceChildren(...speaker.paragraphs.map(text => {
    const p = document.createElement("p");
    p.textContent = text;
    return p;
  }));
  previous.disabled = index === 0;
  next.textContent = index === speakers.length - 1 ? "Back to speakers" : "Next speaker →";
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function showMenu() {
  oral.classList.add("hidden");
  menu.classList.remove("hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

document.querySelectorAll("[data-speaker]").forEach(button => {
  button.addEventListener("click", () => showSpeaker(Number(button.dataset.speaker)));
});
document.getElementById("back").addEventListener("click", showMenu);
previous.addEventListener("click", () => {
  if (currentSpeaker > 0) showSpeaker(currentSpeaker - 1);
});
next.addEventListener("click", () => {
  if (currentSpeaker === speakers.length - 1) showMenu();
  else showSpeaker(currentSpeaker + 1);
});
