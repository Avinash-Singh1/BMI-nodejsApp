document.getElementById("r1").innerHTML = localStorage.getItem("name");
document.getElementById("r2").innerHTML = localStorage.getItem("age")+" Year's";
document.getElementById("r3").innerHTML = localStorage.getItem("height")+" cm";
document.getElementById("r4").innerHTML = localStorage.getItem("weight")+" Kg";
document.getElementById("r5").innerHTML = localStorage.getItem("option");
let bmivalue = document.getElementById("r6").innerHTML = localStorage.getItem("result");
let bmi = parseInt(bmivalue)
console.log(bmi);
if (bmi < 18.5) {
  let result = "Underweight";
    document.getElementById("r7").innerHTML = result;

    // Day1
    document.getElementById("one.1").innerHTML = "Brown rice idli, sambhar, a spoonful of coconut chutney/two whole eggs";
    document.getElementById("one.2").innerHTML = "One whole-grain chapati, dal, mixed vegetable curry, a bowl of salad";
    document.getElementById("one.3").innerHTML = "One large bowl of soup with sautéed tofu/paneer/chicken";
    // Day2
    document.getElementById("two.1").innerHTML = "1 cup masoor dal + 1 cup calocasia + 3 chapatti + 1/2 cup rice + 1 cup low curd + salad";
    document.getElementById("two.2").innerHTML = "1 cup masoor dal + 1 cup calocasia + 3 chapatti + 1/2 cup rice + 1 cup low curd + salad";
    document.getElementById("two.3").innerHTML = "1 cup masoor dal + 1 cup calocasia + 3 chapatti + 1/2 cup rice + 1 cup low curd + salad";
    // Day3
    document.getElementById("three.1").innerHTML = "1 cup masoor dal + 1 cup calocasia + 3 chapatti + 1/2 cup rice + 1 cup low curd + salad";
    document.getElementById("three.2").innerHTML = "1 cup masoor dal + 1 cup calocasia + 3 chapatti + 1/2 cup rice + 1 cup low curd + salad";
    document.getElementById("three.3").innerHTML = "1 cup masoor dal + 1 cup calocasia + 3 chapatti + 1/2 cup rice + 1 cup low curd + salad";
    //  Day4
    document.getElementById("four.1").innerHTML = "1 cup masoor dal + 1 cup calocasia + 3 chapatti + 1/2 cup rice + 1 cup low curd + salad";
    document.getElementById("four.2").innerHTML = "1 cup masoor dal + 1 cup calocasia + 3 chapatti + 1/2 cup rice + 1 cup low curd + salad";
    document.getElementById("four.3").innerHTML = "1 cup masoor dal + 1 cup calocasia + 3 chapatti + 1/2 cup rice + 1 cup low curd + salad";
    // Day5
    document.getElementById("five.1").innerHTML = "1 cup masoor dal + 1 cup calocasia + 3 chapatti + 1/2 cup rice + 1 cup low curd + salad";
    document.getElementById("five.2").innerHTML = "1 cup masoor dal + 1 cup calocasia + 3 chapatti + 1/2 cup rice + 1 cup low curd + salad";
    document.getElementById("five.3").innerHTML = "1 cup masoor dal + 1 cup calocasia + 3 chapatti + 1/2 cup rice + 1 cup low curd + salad";
    // Day6
    document.getElementById("six.1").innerHTML = "1 cup masoor dal + 1 cup calocasia + 3 chapatti + 1/2 cup rice + 1 cup low curd + salad";
    document.getElementById("six.2").innerHTML = "1 cup masoor dal + 1 cup calocasia + 3 chapatti + 1/2 cup rice + 1 cup low curd + salad";
    document.getElementById("six.3").innerHTML = "1 cup masoor dal + 1 cup calocasia + 3 chapatti + 1/2 cup rice + 1 cup low curd + salad";
    // Day7
    document.getElementById("seven.1").innerHTML = "1 cup masoor dal + 1 cup calocasia + 3 chapatti + 1/2 cup rice + 1 cup low curd + salad";
    document.getElementById("seven.2").innerHTML = "1 cup masoor dal + 1 cup calocasia + 3 chapatti + 1/2 cup rice + 1 cup low curd + salad";
    document.getElementById("seven.3").innerHTML = "1 cup masoor dal + 1 cup calocasia + 3 chapatti + 1/2 cup rice + 1 cup low curd + salad";

} else if (18.5 <= bmi && bmi <= 24.9) {
    let result = "Normal Weight";
   
    document.getElementById("r7").innerHTML = result;


    // Day1
    document.getElementById("one.1").innerHTML = "You could have a bowl of oats porridge (with skimmed milk) and mixed nuts (25 gm).";
    document.getElementById("one.2").innerHTML = "Have 2 rotis with dal and any sabzi (preferably something light like gajar matar).";
    document.getElementById("one.3").innerHTML = "You can have 2 rotis with a bowl of dal and water-rich vegetables like lauki sabzi.";
    // Day2
    document.getElementById("two.1").innerHTML = "Eat 2 rotis stuffed with mixed vegetables along with 1 cup of curd.";
    document.getElementById("two.2").innerHTML = "You can eat half a bowl of methi rice along with a vegetable lentil curry of choice.";
    document.getElementById("two.3").innerHTML = "Have sauteed vegetables and green chutney for a light dinner.";
    // Day3
    document.getElementById("three.1").innerHTML = "You can have 2 slices of multigrain toast along with a cup of skimmed milk yoghurt.";
    document.getElementById("three.2").innerHTML = "Have a bowl of sauteed vegetables along with paneer kebab and green chutney. + 3 chapatti + 1/2 cup rice + 1 cup low curd + salad";
    document.getElementById("three.3").innerHTML = "1 cup masoor dal + 1 cup calocasia + 3 chapatti + 1/2 cup rice + 1 cup low curd + salad + You can have half a bowl of methi rice and 1 cup of lentil curry of your choice.";
    //  Day4
    document.getElementById("four.1").innerHTML = "You can make a smoothie with nuts, fruit, and yoghurt along with any fruit of your choice + salad";
    document.getElementById("four.2").innerHTML = "Have a cup of moong dal, bhindi sabzi, and 2 rotis + 3 chapatti + 1/2 cup rice + 1 cup low curd + salad";
    document.getElementById("four.3").innerHTML = "You can have 1 roti, a bowl of curd, and a bowl of aloo baingan tamatar ki sabzi.";
    // Day5
    document.getElementById("five.1").innerHTML = "Start your day with a glass of skimmed milk and a bowl of peas and carrot poha.";
    document.getElementById("five.2").innerHTML = "Eat 1 missi roti with low-fat paneer curry and dal.";
    document.getElementById("five.3").innerHTML = "1 cup masoor dal + 1 cup calocasia + 3 chapatti + 1/2 cup rice + 1 cup low curd + salad";
    // Day6
    document.getElementById("six.1").innerHTML = "You can have 2 idlis with a bowl of sambar.";
    document.getElementById("six.2").innerHTML = "Have 1 roti with a bowl of curd and aloo baingan tamatar ki sabzi or mixed vegetable sabzi.";
    document.getElementById("six.3").innerHTML = "You can eat a cup of moong dal with 1 roti and little bhindi sabzi.";
    // Day7
    document.getElementById("seven.1").innerHTML = "Buckwheat porridge with sliced mango/fruit salad with a glass of milk.";
    document.getElementById("seven.2").innerHTML = "Vegetable soup with whole-grain roti/one bowl millet and dal khichdi with multigrain roti.";
    document.getElementById("seven.3").innerHTML = "Masala-baked chicken with dal and 1 multigrain roti.";


} else if (25 <= bmi && bmi <= 29.9) {
   let result = "Overweight";
    document.getElementById("r7").innerHTML = result;


    // Day1
    document.getElementById("one.1").innerHTML = "Brown rice idli, sambhar, a spoonful of coconut chutney/two whole eggs, one toast with unsweetened tea/coffee";
    document.getElementById("one.2").innerHTML = "One whole-grain chapati, dal, mixed vegetable curry, a bowl of salad/one whole-grain chapati turned into a tortilla with chicken stuffing";
    document.getElementById("one.3").innerHTML = "One large bowl of soup with sautéed tofu/paneer/chicken";
    // Day2
    document.getElementById("two.1").innerHTML = "1 cup masoor dal + 1 cup calocasia + 3 chapatti + 1/2 cup rice + 1 cup low curd + salad";
    document.getElementById("two.2").innerHTML = "1 cup masoor dal + 1 cup calocasia + 3 chapatti + 1/2 cup rice + 1 cup low curd + salad";
    document.getElementById("two.3").innerHTML = "1 cup masoor dal + 1 cup calocasia + 3 chapatti + 1/2 cup rice + 1 cup low curd + salad";
    // Day3
    document.getElementById("three.1").innerHTML = "1 cup masoor dal + 1 cup calocasia + 3 chapatti + 1/2 cup rice + 1 cup low curd + salad";
    document.getElementById("three.2").innerHTML = "1 cup masoor dal + 1 cup calocasia + 3 chapatti + 1/2 cup rice + 1 cup low curd + salad";
    document.getElementById("three.3").innerHTML = "1 cup masoor dal + 1 cup calocasia + 3 chapatti + 1/2 cup rice + 1 cup low curd + salad";
    //  Day4
    document.getElementById("four.1").innerHTML = "1 cup masoor dal + 1 cup calocasia + 3 chapatti + 1/2 cup rice + 1 cup low curd + salad";
    document.getElementById("four.2").innerHTML = "1 cup masoor dal + 1 cup calocasia + 3 chapatti + 1/2 cup rice + 1 cup low curd + salad";
    document.getElementById("four.3").innerHTML = "1 cup masoor dal + 1 cup calocasia + 3 chapatti + 1/2 cup rice + 1 cup low curd + salad";
    // Day5
    document.getElementById("five.1").innerHTML = "1 cup masoor dal + 1 cup calocasia + 3 chapatti + 1/2 cup rice + 1 cup low curd + salad";
    document.getElementById("five.2").innerHTML = "1 cup masoor dal + 1 cup calocasia + 3 chapatti + 1/2 cup rice + 1 cup low curd + salad";
    document.getElementById("five.3").innerHTML = "1 cup masoor dal + 1 cup calocasia + 3 chapatti + 1/2 cup rice + 1 cup low curd + salad";
    // Day6
    document.getElementById("six.1").innerHTML = "1 cup masoor dal + 1 cup calocasia + 3 chapatti + 1/2 cup rice + 1 cup low curd + salad";
    document.getElementById("six.2").innerHTML = "1 cup masoor dal + 1 cup calocasia + 3 chapatti + 1/2 cup rice + 1 cup low curd + salad";
    document.getElementById("six.3").innerHTML = "1 cup masoor dal + 1 cup calocasia + 3 chapatti + 1/2 cup rice + 1 cup low curd + salad";
    // Day7
    document.getElementById("seven.1").innerHTML = "1 cup masoor dal + 1 cup calocasia + 3 chapatti + 1/2 cup rice + 1 cup low curd + salad";
    document.getElementById("seven.2").innerHTML = "1 cup masoor dal + 1 cup calocasia + 3 chapatti + 1/2 cup rice + 1 cup low curd + salad";
    document.getElementById("seven.3").innerHTML = "1 cup masoor dal + 1 cup calocasia + 3 chapatti + 1/2 cup rice + 1 cup low curd + salad";


} else if (30 <= bmi && bmi <= 35) {
    let result = "Obese";
    document.getElementById("r7").innerHTML = result;

    // Day1
    document.getElementById("one.1").innerHTML = "Brown rice idli, sambhar, a spoonful of coconut chutney/two whole eggs, one toast with unsweetened tea/coffee";
    document.getElementById("one.2").innerHTML = "One whole-grain chapati, dal, mixed vegetable curry, a bowl of salad/one whole-grain chapati turned into a tortilla with chicken stuffing";
    document.getElementById("one.3").innerHTML = "One large bowl of soup with sautéed tofu/paneer/chicken";
    // Day2
    document.getElementById("two.1").innerHTML = "1 cup masoor dal + 1 cup calocasia + 3 chapatti + 1/2 cup rice + 1 cup low curd + salad";
    document.getElementById("two.2").innerHTML = "1 cup masoor dal + 1 cup calocasia + 3 chapatti + 1/2 cup rice + 1 cup low curd + salad";
    document.getElementById("two.3").innerHTML = "1 cup masoor dal + 1 cup calocasia + 3 chapatti + 1/2 cup rice + 1 cup low curd + salad";
    // Day3
    document.getElementById("three.1").innerHTML = "1 cup masoor dal + 1 cup calocasia + 3 chapatti + 1/2 cup rice + 1 cup low curd + salad";
    document.getElementById("three.2").innerHTML = "1 cup masoor dal + 1 cup calocasia + 3 chapatti + 1/2 cup rice + 1 cup low curd + salad";
    document.getElementById("three.3").innerHTML = "1 cup masoor dal + 1 cup calocasia + 3 chapatti + 1/2 cup rice + 1 cup low curd + salad";
    //  Day4
    document.getElementById("four.1").innerHTML = "1 cup masoor dal + 1 cup calocasia + 3 chapatti + 1/2 cup rice + 1 cup low curd + salad";
    document.getElementById("four.2").innerHTML = "1 cup masoor dal + 1 cup calocasia + 3 chapatti + 1/2 cup rice + 1 cup low curd + salad";
    document.getElementById("four.3").innerHTML = "1 cup masoor dal + 1 cup calocasia + 3 chapatti + 1/2 cup rice + 1 cup low curd + salad";
    // Day5
    document.getElementById("five.1").innerHTML = "1 cup masoor dal + 1 cup calocasia + 3 chapatti + 1/2 cup rice + 1 cup low curd + salad";
    document.getElementById("five.2").innerHTML = "1 cup masoor dal + 1 cup calocasia + 3 chapatti + 1/2 cup rice + 1 cup low curd + salad";
    document.getElementById("five.3").innerHTML = "1 cup masoor dal + 1 cup calocasia + 3 chapatti + 1/2 cup rice + 1 cup low curd + salad";
    // Day6
    document.getElementById("six.1").innerHTML = "1 cup masoor dal + 1 cup calocasia + 3 chapatti + 1/2 cup rice + 1 cup low curd + salad";
    document.getElementById("six.2").innerHTML = "1 cup masoor dal + 1 cup calocasia + 3 chapatti + 1/2 cup rice + 1 cup low curd + salad";
    document.getElementById("six.3").innerHTML = "1 cup masoor dal + 1 cup calocasia + 3 chapatti + 1/2 cup rice + 1 cup low curd + salad";
    // Day7
    document.getElementById("seven.1").innerHTML = "1 cup masoor dal + 1 cup calocasia + 3 chapatti + 1/2 cup rice + 1 cup low curd + salad";
    document.getElementById("seven.2").innerHTML = "1 cup masoor dal + 1 cup calocasia + 3 chapatti + 1/2 cup rice + 1 cup low curd + salad";
    document.getElementById("seven.3").innerHTML = "1 cup masoor dal + 1 cup calocasia + 3 chapatti + 1/2 cup rice + 1 cup low curd + salad";


} else if (35 <= bmi) {
    let result = "Extremely obese";
    // document.getElementById("bmi_decision").innerHTML = result;
    document.getElementById("r7").innerHTML = result;

    // Day1
    document.getElementById("one.1").innerHTML = "Brown rice idli, sambhar, a spoonful of coconut chutney/two whole eggs, one toast with unsweetened tea/coffee";
    document.getElementById("one.2").innerHTML = "One whole-grain chapati, dal, mixed vegetable curry, a bowl of salad/one whole-grain chapati turned into a tortilla with chicken stuffing";
    document.getElementById("one.3").innerHTML = "One large bowl of soup with sautéed tofu/paneer/chicken";
    // Day2
    document.getElementById("two.1").innerHTML = "1 cup masoor dal + 1 cup calocasia + 3 chapatti + 1/2 cup rice + 1 cup low curd + salad";
    document.getElementById("two.2").innerHTML = "1 cup masoor dal + 1 cup calocasia + 3 chapatti + 1/2 cup rice + 1 cup low curd + salad";
    document.getElementById("two.3").innerHTML = "1 cup masoor dal + 1 cup calocasia + 3 chapatti + 1/2 cup rice + 1 cup low curd + salad";
    // Day3
    document.getElementById("three.1").innerHTML = "1 cup masoor dal + 1 cup calocasia + 3 chapatti + 1/2 cup rice + 1 cup low curd + salad";
    document.getElementById("three.2").innerHTML = "1 cup masoor dal + 1 cup calocasia + 3 chapatti + 1/2 cup rice + 1 cup low curd + salad";
    document.getElementById("three.3").innerHTML = "1 cup masoor dal + 1 cup calocasia + 3 chapatti + 1/2 cup rice + 1 cup low curd + salad";
    //  Day4
    document.getElementById("four.1").innerHTML = "1 cup masoor dal + 1 cup calocasia + 3 chapatti + 1/2 cup rice + 1 cup low curd + salad";
    document.getElementById("four.2").innerHTML = "1 cup masoor dal + 1 cup calocasia + 3 chapatti + 1/2 cup rice + 1 cup low curd + salad";
    document.getElementById("four.3").innerHTML = "1 cup masoor dal + 1 cup calocasia + 3 chapatti + 1/2 cup rice + 1 cup low curd + salad";
    // Day5
    document.getElementById("five.1").innerHTML = "1 cup masoor dal + 1 cup calocasia + 3 chapatti + 1/2 cup rice + 1 cup low curd + salad";
    document.getElementById("five.2").innerHTML = "1 cup masoor dal + 1 cup calocasia + 3 chapatti + 1/2 cup rice + 1 cup low curd + salad";
    document.getElementById("five.3").innerHTML = "1 cup masoor dal + 1 cup calocasia + 3 chapatti + 1/2 cup rice + 1 cup low curd + salad";
    // Day6
    document.getElementById("six.1").innerHTML = "1 cup masoor dal + 1 cup calocasia + 3 chapatti + 1/2 cup rice + 1 cup low curd + salad";
    document.getElementById("six.2").innerHTML = "1 cup masoor dal + 1 cup calocasia + 3 chapatti + 1/2 cup rice + 1 cup low curd + salad";
    document.getElementById("six.3").innerHTML = "1 cup masoor dal + 1 cup calocasia + 3 chapatti + 1/2 cup rice + 1 cup low curd + salad";
    // Day7
    document.getElementById("seven.1").innerHTML = "1 cup masoor dal + 1 cup calocasia + 3 chapatti + 1/2 cup rice + 1 cup low curd + salad";
    document.getElementById("seven.2").innerHTML = "1 cup masoor dal + 1 cup calocasia + 3 chapatti + 1/2 cup rice + 1 cup low curd + salad";
    document.getElementById("seven.3").innerHTML = "1 cup masoor dal + 1 cup calocasia + 3 chapatti + 1/2 cup rice + 1 cup low curd + salad";


}