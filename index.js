function scuberGreetingForFeet(distance){
  let speech
  if (distance < 400)
    return speech = 'This one is on me!';
  else if (distance > 2000 && distance < 2500 )
    return speech = 'I will gladly take your thirty bucks.';
  else if (distance >2000 && distance > 2500)
    return speech = "No can do.";
}

function ternaryCheckCity(destination){
  let speech
  if (destination ==='NYC')
    return speech ='Ok, sounds good.';
  else return speech = "No go.";}

function switchOnCharmFromTip(tip){
  let speech 
  if (tip === "generous" )
    return speech = "Thank you so much.";
  else if (tip ==='not as generous')
    return speech = "Thank you.";
  else if (tip !== "generous" && tip !== "not as generous")
    return speech = "Bye.";
}