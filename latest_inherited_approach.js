const salesforce_service_cloud = {
    // key : value 
    A_business_to_consumer__to_meet_the_requirements : "Service Cloud Voice with Tele-Play",
    Service_Representatives_are_complaining__efficiency_of_console_users : "Enable Keyboard shortcuts"
}

console.log(salesforce_service_cloud);

let user_input_question  = prompt("Enter your Question : ");

// array to store all the keys of the object 
let question_keys = Object.keys(salesforce_service_cloud);

// type_conversion of the stored keys from 'object' to 'array of strings' 
let type_converted_question_keys = String[(question_keys)];

console.log("question_keys : " + question_keys);

let answer;

for(let i = 0; i < type_converted_question_keys; i++) {
    if(user_input_question == type_converted_question_keys[i]) {
        answer = Object.values(salesforce_service_cloud[i]);
    }
}

console.log(answer);
