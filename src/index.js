const root = document.querySelector('#root');
const div = document.createElement('div');
div.setAttribute('class', 'container-first')
root.appendChild(div);

const formTag = document.createElement('form');
formTag.setAttribute('id','container-first__form-input')
div.appendChild(formTag);

const RegDiv = document.createElement('div');
RegDiv.setAttribute('class', 'find');
RegDiv.title = 'registration';
RegDiv.textContent = 'Input Your Data';
formTag.appendChild(RegDiv);

const lebel = document.createElement('label');
lebel.setAttribute('for', 'name');
lebel.innerHTML = 'Name <span>*</span>';
formTag.appendChild(lebel);

const input = document.createElement('input');
input.setAttribute('id', 'name');
input.setAttribute('type', 'text');
input.placeholder = 'Enter Your Name';
formTag.appendChild(input);

const lebel_1 = document.createElement('label');
lebel_1.setAttribute('for', 'surname');
lebel_1.innerHTML = 'Surname <span>*</span>';
formTag.appendChild(lebel_1);

const input_1 = document.createElement('input');
input_1.setAttribute('id', 'surname');
input_1.setAttribute('type', 'text');
input_1.placeholder = 'Enter Your Surname';
formTag.appendChild(input_1);

const lebel_2 = document.createElement('label');
lebel_2.setAttribute('for', 'age');
lebel_2.innerHTML = 'Age <span>*</span>';
formTag.appendChild(lebel_2);

const input_2 = document.createElement('input');
input_2.setAttribute('id', 'age');
input_2.setAttribute('type', 'number');
input_2.placeholder = 'Enter Your Age';
input_2.min = '1';
input_2.max = '100';    
formTag.appendChild(input_2);

const btnDiv = document.createElement('div');
btnDiv.setAttribute('class', 'btn');
btnDiv.textContent = 'Submit';
formTag.appendChild(btnDiv);

//first-page_second form------------------------------------------------
const formTag_1 = document.createElement('form');
formTag_1.setAttribute('id','container-first__form-input')
div.appendChild(formTag_1);

const findDiv = document.createElement('div');
findDiv.setAttribute('class', 'find');
findDiv.textContent = 'Names List';
findDiv.title = 'You Can Find Your Name Here';
formTag_1.appendChild(findDiv);

const textarea = document.createElement('textarea');
textarea.setAttribute('id', 'message');
textarea.name = 'message';
textarea.placeholder = 'Name Surname Age';
formTag_1.appendChild(textarea);

//second page -------------------------------------------------
const div_1 = document.createElement('div');
div_1.setAttribute('class', 'container-second');
root.appendChild(div_1);

const formTag_2 = document.createElement('form');
formTag_2.setAttribute('id','container-first__form-input');
div_1.appendChild(formTag_2);

const RegDiv_1 = document.createElement('div');
RegDiv_1.setAttribute('class', 'find');
RegDiv_1.title = 'Find Your Name';
RegDiv_1.textContent = 'Searching';
formTag_2.appendChild(RegDiv_1);

const lebel_3 = document.createElement('label');
lebel_3.setAttribute('for', 'nname');
lebel_3.innerHTML = 'Name<span>*</span>';
formTag_2.appendChild(lebel_3);

const input_3 = document.createElement('input');
input_3.setAttribute('id', 'nname');
input_3.setAttribute('type', 'text');
input_3.placeholder = 'Enter Your Name';
formTag_2.appendChild(input_3);

const lebel_4 = document.createElement('label');
lebel_4.setAttribute('for', 'ssurname');
lebel_4.innerHTML = 'Surname <span>*</span>';
formTag_2.appendChild(lebel_4);

const input_4 = document.createElement('input');
input_4.setAttribute('id', 'ssurname');
input_4.setAttribute('type', 'text');
input_4.placeholder = 'Enter Your Name';
formTag_2.appendChild(input_4);

const lebel_5 = document.createElement('label');
lebel_5.setAttribute('for', 'aage');
lebel_5.innerHTML = 'Age <span>*</span>';
formTag_2.appendChild(lebel_5);

const input_5 = document.createElement('input');
input_5.setAttribute('id', 'aage');
input_5.setAttribute('type', 'number');
input_5.placeholder = 'Enter Your Age';
input_5.min = '1';
input_5.max = '100';
formTag_2.appendChild(input_5);

const btnDiv_1 = document.createElement('div');
btnDiv_1.setAttribute('class', 'btn');
btnDiv_1.textContent = 'Search';
formTag_2.appendChild(btnDiv_1);

//second-page_second-form-------------------------------
const formTag_3 = document.createElement('form');
formTag_3.setAttribute('id','container-first__form-input')
div_1.appendChild(formTag_3);

const findDiv_1 = document.createElement('div');
findDiv_1.setAttribute('class', 'find');
findDiv_1.title = 'Search Result';
findDiv_1.textContent = 'Search Result';
formTag_3.appendChild(findDiv_1);

const textarea_1 = document.createElement('textarea');
textarea_1.setAttribute('id', 'message');
textarea_1.name = 'message';
textarea_1.placeholder = 'Name Surname Age';
formTag_3.appendChild(textarea_1);