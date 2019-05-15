var red_car = document.getElementById('red-car');
var direction = 'east'; //car starts facing east
var top_r = document.getElementById('t-r');
var top_l = document.getElementById('t-l');
var bottom_r = document.getElementById('b-r');
var bottom_l = document.getElementById('b-l');
var commence = document.getElementById('start-button');
var intervalId_red_car;
commence.addEventListener('click', countDown);

reset();

function reset(){
    red_car.style.left = '890px';
    red_car.style.top = '310px';

    top_r.style.left = '995px';
    top_r.style.top = '270px';

    top_l.style.left = '295px';
    top_l.style.top = '270px';

    bottom_l.style.left = '295px';
    bottom_l.style.top = '470px';

    bottom_r.style.left = '995px';
    bottom_r.style.top = '470px';
    
}

var box_left = parseInt(top_r.style.left.replace("px", ""));
var box_bottom = parseInt(top_l.style.top.replace("px", "")) + 100;
var box_top = parseInt(bottom_r.style.top.replace("px", ""));
var box_right = parseInt(bottom_l.style.left.replace("px", "")) + 100;
var rotate = 0;


function countDown(){
    var countdown = document.getElementById('countdown');
    countdown.innerHTML = "3";
    setTimeout(() => countdown.innerHTML = "2", 1000);
    setTimeout(() => countdown.innerHTML = "1", 2000);
    setTimeout(() => {
        countdown.innerHTML = "Go!";
        carStart();
    }, 3000);
}

function carStart(){
    intervalId_red_car = setInterval(tickRedCar, 50);
}

function tickRedCar(){  
    switch (direction){
        case 'east':
            moveEast();
            break;
        case 'south':
            moveSouth();
            break;
        case 'west':
            moveWest();
            break;
        case 'north':
            moveNorth();
            break;
    }
}

function moveEast(){
    red_car.style.left = `${parseInt(red_car.style.left.replace("px", "")) + 7}px`;
    var red_car_east = parseInt(red_car.style.left.replace("px", ""));
    if (red_car_east > 420 && red_car_east < 600) stopCar();
    if (red_car_east >= (box_left - 5)){
        rotate += 90;
        red_car.style.transform = `rotate(${rotate}deg)`;
        direction = 'south';
    }
}

function moveSouth(){
    red_car.style.top = `${parseInt(red_car.style.top.replace("px", "")) + 7}px`;
    var red_car_south = parseInt(red_car.style.top.replace("px", ""));
    if (red_car_south >= (box_top + 20)){
        rotate += 90;
        red_car.style.transform = `rotate(${rotate}deg)`;
        direction = 'west';
    }
}

function moveWest(){
    red_car.style.left = `${parseInt(red_car.style.left.replace("px", "")) - 7}px`;
    var red_car_west = parseInt(red_car.style.left.replace("px", ""));
    if (red_car_west <= (box_right - 75)){
        rotate += 90;
        red_car.style.transform = `rotate(${rotate}deg)`;
        direction = 'north';
    }
}

function moveNorth(){
    red_car.style.top = `${parseInt(red_car.style.top.replace("px", "")) - 7}px`;
    var red_car_north = parseInt(red_car.style.top.replace("px", ""));
    if (red_car_north <= (box_bottom - 60)){
        rotate += 90;
        red_car.style.transform = `rotate(${rotate}deg)`;
        direction = 'east';
    }
}

function stopCar() {
    clearInterval(intervalId_red_car);
}