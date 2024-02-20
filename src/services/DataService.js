const SayHello = async (inputName)=>{
    const promise = await fetch(`https://allforonebria.azurewebsites.net/SayHello/SayHello/${inputName}`);
    const data = promise.text();
    return data;
}
const Adding = async (firstNum, secondNum)=>{
    const promise = await fetch(`https://allforonebria.azurewebsites.net/api/AddingTwoNumbers/${firstNum}/${secondNum}`);
    const data = promise.text();
    return data;
}
const GreaterThanOrLess = async (numOne,numTwo)=>{
const promise = await fetch (`https://allforonebria.azurewebsites.net/GreaterThanOrLessThan/GreaterThan/${numOne}/${numTwo}`);
const data = await promise.text();
return data;
}
const MadLibs = async (inputA,inputB,inputC,inputD,inputE,inputF,inputG,inputH,inputI,inputJ)=>{
    const promise = await fetch(`https://allforonebria.azurewebsites.net/api/Minich5/Minich5/${inputA}/${inputB}/${inputC}/${inputD}/${inputE}/${inputF}/${inputG}/${inputH}/${inputI}/${inputJ}`)
    const data = await promise.text();
    return data;
}
const MagicEightBall = async(question) =>{
    const promise = await fetch(`https://allforonebria.azurewebsites.net/api/Minich9/MagicEight/${question}`);
    const data = promise.text();
    return data;
}
const NameTime = async (name1 ,time)=>{
const promise = await fetch(`https://allforonebria.azurewebsites.net/AskingQuestions/Name/${name1}/${time}`);
const data = await promise.text();
return data;
}
const OddOrEven = async (number)=>{
    const promise = await fetch(`https://allforonebria.azurewebsites.net/api/Minich6/OddOrEven/${number}`);
    const data = await promise.text();
    return data;
}
const RestaurantPicker = async (category)=>{
    const promise = await fetch(`https://allforonebria.azurewebsites.net/Minich10/MexicanThaiOrSeafood/${category}`);
    const data = await promise.text();
    return data;
}
const ReverseItAlpabet = async(word)=>{
    const promise = await fetch(`https://allforonebria.azurewebsites.net/Alphanumeric/ReverseIt/${word}`);
    const data = await promise.text();
    return data;
}
const ReverseItNumeric = async(num)=>{
    const promise = await fetch(`https://allforonebria.azurewebsites.net/Numeric/ReverseNumber/${num}`);
    const data = await promise.text();
    return data;
}

export{SayHello, Adding,GreaterThanOrLess,MadLibs,MagicEightBall,NameTime,OddOrEven,RestaurantPicker,ReverseItAlpabet,ReverseItNumeric}