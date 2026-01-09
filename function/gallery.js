const viewer = document.getElementById('fullscreenViewer');
const viewerImage = document.getElementById('viewerImage');
const closeButton = document.getElementById('closeButton');
const nextButton = document.getElementById('nextButton');
const prevButton = document.getElementById('prevButton');















const buttons = document.querySelectorAll('.homeButtons button');
const image2 = document.querySelectorAll('.sketchImg, .digitalImg, .pubmatImg, .projectImg, .programImg');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const category = button.textContent.toLowerCase();
        image2.forEach(img => {
            img.style.display = img.classList.contains(`${category}Img`) ? 'block' : 'none';
        });
    });
});



// Function to handle button click and toggle image2
function handleButtonClick(buttonClass, imageClass, load) {

        if(load == 1){
        document.getElementsByClassName("work_view")[0].innerHTML = `
         <img class="digitalImg" loading="lazy"decoding="async" src="img/digiArt/digi1.webp" /> 
            <img class="digitalImg" loading="lazy"decoding="async" src="img/digiArt/digi2.webp" /> 
            <img class="digitalImg" loading="lazy"decoding="async" src="img/digiArt/digi28.webp" /> 
            <img class="digitalImg" loading="lazy"decoding="async" src="img/digiArt/yuri.webp" /> 
            <img class="digitalImg" loading="lazy"decoding="async" src="img/digiArt/roof.webp" /> 
            <img class="digitalImg" loading="lazy"decoding="async" src="img/digiArt/mitsu.webp" /> 
            <img class="digitalImg" loading="lazy"decoding="async" src="img/digiArt/stair_final.webp" /> 
            <img class="digitalImg" loading="lazy"decoding="async" src="img/digiArt/wheel_final2.webp" /> 
            <img class="digitalImg" loading="lazy"decoding="async" src="img/digiArt/digi3.webp" /> 
            <img class="digitalImg" loading="lazy"decoding="async" src="img/digiArt/digi4.webp" /> 
            <img class="digitalImg" loading="lazy"decoding="async" src="img/digiArt/digi5.webp" /> 
            <img class="digitalImg" loading="lazy"decoding="async" src="img/digiArt/digi6.webp" /> 
            <img class="digitalImg" loading="lazy"decoding="async" src="img/digiArt/digi8.webp" /> 
            <img class="digitalImg" loading="lazy"decoding="async" src="img/digiArt/digi21.webp" />
            <img class="digitalImg" loading="lazy"decoding="async" src="img/project/other/Untitled160.webp" />
            <img class="digitalImg" loading="lazy"decoding="async" src="img/digiArt/digi26.webp" /> 
            <img class="digitalImg" loading="lazy"decoding="async" src="img/pubmat/pubmat2.webp" />  
            <img class="digitalImg" loading="lazy"decoding="async" src="img/digiArt/digi9.webp" /> 
            <img class="digitalImg" loading="lazy"decoding="async" src="img/digiArt/digi7.webp" /> 
            <img class="digitalImg" loading="lazy"decoding="async" src="img/pubmat/pubmat37.webp" /> 
            <img class="digitalImg" loading="lazy"decoding="async" src="img/pubmat/pubmat28.webp" />
            <img class="digitalImg" loading="lazy"decoding="async" src="img/digiArt/digi11.webp" /> 
            <img class="digitalImg" loading="lazy"decoding="async" src="img/digiArt/digi12.webp" /> 
            <img class="digitalImg" loading="lazy"decoding="async" src="img/digiArt/digi16.webp" /> 
           <img class="digitalImg" loading="lazy"decoding="async" src="img/digiArt/digi15.webp" /> 
            <img class="digitalImg" loading="lazy"decoding="async" src="img/digiArt/digi17.webp" />  

        `;
    }else if(load == 2){
        document.getElementsByClassName("work_view")[0].innerHTML = `
          <img class="sketchImg"src="img/sketchbook/sketch1.webp"  loading="lazy" decoding="async"/>
            <img class="sketchImg"src="img/sketchbook/sketch2.webp"  loading="lazy" decoding="async"/>
            <img class="sketchImg"src="img/sketchbook/sketch3.webp"  loading="lazy" decoding="async"/>
            <img class="sketchImg"src="img/sketchbook/sketch4.webp"  loading="lazy" decoding="async"/>
            <img class="sketchImg"src="img/sketchbook/sketch5.webp"  loading="lazy" decoding="async"/>
            <img class="sketchImg"src="img/sketchbook/sketch6.webp"  loading="lazy" decoding="async"/>
            <img class="sketchImg"src="img/sketchbook/sketch7.webp"  loading="lazy" decoding="async"/>
            <img class="sketchImg"src="img/sketchbook/sketch8.webp"  loading="lazy" decoding="async"/>
            <img class="sketchImg"src="img/sketchbook/sketch9.webp"  loading="lazy" decoding="async"/>
            <img class="sketchImg"src="img/sketchbook/sketch10.webp" loading="lazy" decoding="async"/>
            <img class="sketchImg"src="img/sketchbook/sketch11.webp" loading="lazy" decoding="async"/>
            <img class="sketchImg"src="img/sketchbook/sketch12.webp" loading="lazy" decoding="async"/>
            <img class="sketchImg"src="img/sketchbook/sketch13.webp" loading="lazy" decoding="async"/>
            <img class="sketchImg"src="img/sketchbook/sketch14.webp" loading="lazy" decoding="async"/>
            <img class="sketchImg"src="img/project/other/Untitled91_20230930105618.webp"  loading="lazy"decoding="async"/>


        `;
    }else if(load == 3){
        document.getElementsByClassName("work_view")[0].innerHTML = `
           <img class="pubmatImg" loading="lazy"decoding="async" src="img/pubmat/pubmat28.webp" /> 
            <img class="pubmatImg" loading="lazy"decoding="async" src="img/pubmat/pubmat37.webp" /> 
            <img class="pubmatImg" loading="lazy"decoding="async" src="img/pubmat/pubmat2.webp" /> 
            <img class="pubmatImg" loading="lazy"decoding="async" src="img/pubmat/pubmat5.webp" />
            <img class="pubmatImg" loading="lazy"decoding="async" src="img/pubmat/pubmat1.webp" /> 
            <img class="pubmatImg" loading="lazy"decoding="async" src="img/pubmat/pubmat3.webp" /> 
            <img class="pubmatImg" loading="lazy"decoding="async" src="img/pubmat/pubmat4.webp" /> 
            <img class="pubmatImg" loading="lazy"decoding="async" src="img/pubmat/pubmat6.webp" /> 
            <img class="pubmatImg" loading="lazy"decoding="async" src="img/pubmat/pubmat38.webp" />
            <img class="pubmatImg" loading="lazy"decoding="async" src="img/pubmat/pubmat39.webp" />
            <img class="pubmatImg" loading="lazy"decoding="async" src="img/pubmat/pubmat40.webp"/>
            <img class="pubmatImg" loading="lazy"decoding="async" src="img/pubmat/pubmat8.webp" /> 
            <img class="pubmatImg" loading="lazy"decoding="async" src="img/project/other/Untitled150.webp" />
            <img class="pubmatImg" loading="lazy"decoding="async" src="img/project/other/Untitled160.webp" />
            <img class="pubmatImg" loading="lazy"decoding="async" src="img/pubmat/pubmat29.webp" /> 
            <img class="pubmatImg" loading="lazy"decoding="async" src="img/pubmat/pubmat30.webp" /> 
            <img class="pubmatImg" loading="lazy"decoding="async" src="img/pubmat/pubmat9.webp" /> 
            <img class="pubmatImg" loading="lazy"decoding="async" src="img/pubmat/ICT.webp" /> 
            <img class="pubmatImg" loading="lazy"decoding="async" src="img/pubmat/pubmat16.webp" /> 
            <img class="pubmatImg" loading="lazy"decoding="async" src="img/pubmat/pubmat18.webp" />
            <img class="pubmatImg" loading="lazy"decoding="async" src="img/pubmat/pubmat32.webp" /> 
            <img class="pubmatImg" loading="lazy"decoding="async" src="img/pubmat/pubmat7.webp" /> 
            <img class="pubmatImg" loading="lazy"decoding="async" src="img/pubmat/pubmat33.webp" /> 
            <img class="pubmatImg" loading="lazy"decoding="async" src="img/pubmat/pubmat31.webp" /> 
            <img class="pubmatImg" loading="lazy"decoding="async" src="img/pubmat/pubmat34.webp" /> 
            <img class="pubmatImg" loading="lazy"decoding="async" src="img/pubmat/pubmat35.webp" /> 
            <img class="pubmatImg" loading="lazy"decoding="async" src="img/pubmat/pubmat11.webp" /> 
            <img class="pubmatImg" loading="lazy"decoding="async" src="img/pubmat/pubmat13.webp" /> 
            <img class="pubmatImg" loading="lazy"decoding="async" src="img/pubmat/pubmat14.webp" /> 
            <img class="pubmatImg" loading="lazy"decoding="async" src="img/pubmat/pubmat15.webp" /> 
            <img class="pubmatImg" loading="lazy"decoding="async" src="img/pubmat/pubmat19.webp" /> 
            <img class="pubmatImg" loading="lazy"decoding="async" src="img/pubmat/pubmat24.webp" /> 
            <img class="pubmatImg" loading="lazy"decoding="async" src="img/pubmat/pubmat17.webp" /> 
            <img class="pubmatImg" loading="lazy"decoding="async" src="img/pubmat/pubmat23.webp" /> 
            <img class="pubmatImg" loading="lazy"decoding="async" src="img/pubmat/pubmat25.webp" /> 
            <img class="pubmatImg" loading="lazy"decoding="async" src="img/pubmat/pubmat26.webp" /> 
            <img class="pubmatImg" loading="lazy"decoding="async" src="img/pubmat/pubmat20.webp" /> 
            <img class="pubmatImg" loading="lazy"decoding="async" src="img/pubmat/pubmat21.webp" /> 
            <img class="pubmatImg" loading="lazy"decoding="async" src="img/pubmat/pubmat22.webp" /> 
            <img class="pubmatImg" loading="lazy"decoding="async" src="img/pubmat/pubmat12.webp" />
            
        `;
    }else if(load == 4){
        document.getElementsByClassName("work_view")[0].innerHTML = `
            <p class="projectImg">Commission </p>
            <img class="projectImg" loading="lazy"decoding="async" src="img/project/other/Untitled185_Restored.webp" />
            <img class="projectImg" loading="lazy"decoding="async" src="img/project/other/Untitled189.webp" />
            <img class="projectImg" loading="lazy"decoding="async" src="img/project/other/Untitled191.webp" />
            <img class="projectImg" loading="lazy"decoding="async" src="img/project/other/Untitled511_20230324065141.webp" />
            <img class="projectImg" loading="lazy"decoding="async" src="img/project/other/Untitled131.webp" />
            <img class="projectImg" loading="lazy"decoding="async" src="img/project/other/Untitled258_20231218224121.webp" />
            <img class="projectImg" loading="lazy"decoding="async" src="img/project/other/Untitled379_20240331175635.webp" />
            <img class="projectImg" loading="lazy"decoding="async" src="img/project/other/Untitled130_20250104182213.webp" />
            
            
            <img class="projectImg" loading="lazy"decoding="async" src="img/project/other/v6_2.jpg" />
            <img class="projectImg" loading="lazy"decoding="async" src="img/project/other/Untitled511.jpg" />
            <img class="projectImg" loading="lazy"decoding="async" src="img/project/other/icon.webp" />
            <img class="projectImg" loading="lazy"decoding="async" src="img/project/other/we_make_web_v3.jpg" />
            <img class="projectImg" loading="lazy"decoding="async" src="img/project/other/EINSTEN.webp" />
            <img class="projectImg" loading="lazy"decoding="async" src="img/project/other/28.webp" />
            <img class="projectImg" loading="lazy"decoding="async" src="img/project/other/digi27.webp" />
            <img class="projectImg" loading="lazy"decoding="async" src="img/project/other/29.webp" />
            <img class="projectImg" loading="lazy"decoding="async" src="img/project/other/Untitled232_20250104183239.webp" />
            <img class="projectImg" loading="lazy"decoding="async" src="img/project/other/Untitled71.webp" />
            <img class="projectImg" loading="lazy"decoding="async" src="img/project/other/Untitled72.webp" />
            <img class="projectImg" loading="lazy"decoding="async" src="img/project/other/Untitled436_20250103012408.webp" />
            <img class="projectImg" loading="lazy"decoding="async" src="img/project/other/commision.webp" />
            <img class="projectImg" loading="lazy"decoding="async" src="img/project/other/Untitled433_20250102235123.webp" />
            <img class="projectImg" loading="lazy"decoding="async" src="img/project/other/Untitled60.webp" />
            <img class="projectImg" loading="lazy"decoding="async" src="img/project/other/Untitled437_20250103013900.webp" />

            
            <p class="projectImg">Magazine</p>
            <img class="projectImg" loading="lazy"decoding="async" src="img/project/magazine/magazine01.webp" />
            <img class="projectImg" loading="lazy"decoding="async" src="img/project/magazine/magazine02.webp" />
            <img class="projectImg" loading="lazy"decoding="async" src="img/project/magazine/magazine03.webp" />
            <img class="projectImg" loading="lazy"decoding="async" src="img/project/magazine/magazine04.webp" />
            <img class="projectImg" loading="lazy"decoding="async" src="img/project/magazine/magazine05.webp" />
            <img class="projectImg" loading="lazy"decoding="async" src="img/project/magazine/magazine06.webp" />
            <img class="projectImg" loading="lazy"decoding="async" src="img/project/magazine/magazine07.webp" />
            <img class="projectImg" loading="lazy"decoding="async" src="img/project/magazine/magazine08.webp" />
            <img class="projectImg" loading="lazy"decoding="async" src="img/project/magazine/magazine09.webp" />
            <img class="projectImg" loading="lazy"decoding="async" src="img/project/magazine/magazine10.webp" />
            <img class="projectImg" loading="lazy"decoding="async" src="img/project/magazine/magazine11.webp" />
            <img class="projectImg" loading="lazy"decoding="async" src="img/project/magazine/magazine12.webp" />
            <img class="projectImg" loading="lazy"decoding="async" src="img/project/magazine/magazine13.webp" />
            
            <p class="projectImg">Layout </p>
            <img class="projectImg" loading="lazy"decoding="async" src="img/digiArt/digi18.webp" />
            <img class="projectImg" loading="lazy"decoding="async" src="img/project/other/Untitled95_20231001111413.webp" />
            <img class="projectImg" loading="lazy"decoding="async" src="img/project/other/Untitled260.webp" />
            <img class="projectImg" loading="lazy"decoding="async" src="img/digiArt/digi19.webp" />
            <img class="projectImg" loading="lazy"decoding="async" src="img/project/other/Jer_01.png" />
            
            <p class="projectImg">Figma Design</p>
            <img class="projectImg" loading="lazy"decoding="async" src="img/project/web/portfolio_1.jpg" />
            <img class="projectImg" loading="lazy"decoding="async" src="img/project/web/portfolio_2.jpg" />

        `;
    }else if(load == 5){
        document.getElementsByClassName("work_view")[0].innerHTML = `
           <p class="programImg">PLUS Website</p>
            <ul class="programImg tag">
                <li class="web">web</li>
                <li class="prog_lang js">javascript</li>
                <li class="fb">f<div>i</div>rebase</li>
            </ul>
            <img class="programImg" loading="lazy"decoding="async" src="img/project/web/p1_01.webp" />
            <img class="programImg" loading="lazy"decoding="async" src="img/project/web/p1_02.webp" />
            <img class="programImg" loading="lazy"decoding="async" src="img/project/web/p1_03.webp" />
            <img class="programImg" loading="lazy"decoding="async" src="img/project/web/p1_04.webp" />
            <img class="programImg" loading="lazy"decoding="async" src="img/project/web/p1_05.webp" /> 
            
            <p class="programImg">One Proposal Website </p>
            <ul class="programImg tag">
                <li class="web">web</li>
                <li class="prog_lang blazor">blazor</li>
                <li class="prog_lang cs">c sharp</li>
                <li class="fb">f<div>i</div>rebase</li>
            </ul>
            <img class="programImg" loading="lazy"decoding="async" src="img/project/one_prop/op_2.jpg" />
            <img class="programImg" loading="lazy"decoding="async" src="img/project/one_prop/op_3.jpg" />
            <img class="programImg" loading="lazy"decoding="async" src="img/project/one_prop/op_4.jpg" />
            <img class="programImg" loading="lazy"decoding="async" src="img/project/one_prop/op_5.jpg" />
            <img class="programImg" loading="lazy"decoding="async" src="img/project/one_prop/op_6.jpg" />
            <img class="programImg" loading="lazy"decoding="async" src="img/project/one_prop/op_6_2.jpg" />
            <img class="programImg" loading="lazy"decoding="async" src="img/project/one_prop/op_8.jpg" />
            <img class="programImg" loading="lazy"decoding="async" src="img/project/one_prop/op_7.jpg" />
            <img class="programImg" loading="lazy"decoding="async" src="img/project/other/v6_2.jpg" />
            <ul class="programImg link">
                <li class="pres"><a href="https://www.facebook.com/share/v/1Av51QcXQ2/" target="_blank">Video Presentation</a></li>
            </ul>
        

            <p class="programImg">AZUKI Operating System Simulation</p>
            <ul class="programImg tag">
                <li class="active">active</li>
                <li class="conApp">consoleApp</li>
                <li class="prog_lang cs">c sharp</li>
            </ul>
            <img class="programImg" loading="lazy"decoding="async" src="img/project/azuki_oss/a1.png" />
            <img class="programImg" loading="lazy"decoding="async" src="img/project/azuki_oss/a2.png" />
            <img class="programImg" loading="lazy"decoding="async" src="img/project/azuki_oss/a3.png" />
            <img class="programImg" loading="lazy"decoding="async" src="img/project/azuki_oss/a4.png" />
            <img class="programImg" loading="lazy"decoding="async" src="img/project/azuki_oss/a5.png" />
            <img class="programImg" loading="lazy"decoding="async" src="img/project/azuki_oss/a6.png" />
            <img class="programImg" loading="lazy"decoding="async" src="img/project/azuki_oss/a7.png" />
            <img class="programImg" loading="lazy"decoding="async" src="img/project/azuki_oss/a8.png" />
            <img class="programImg" loading="lazy"decoding="async" src="img/project/azuki_oss/a9.png" />
            <img class="programImg" loading="lazy"decoding="async" src="img/project/azuki_oss/a10.png" />
            <img class="programImg" loading="lazy"decoding="async" src="img/project/azuki_oss/a11.png" />
            <img class="programImg" loading="lazy"decoding="async" src="img/project/azuki_oss/a12.png" />
            <ul class="programImg link">
                <li class="pres"><a href="https://youtu.be/u9v3hWOOSOY?si=IqmhNhc4WnRwl3RY" target="_blank">Video Presentation</a></li>
            </ul>

            <p class="programImg">CS1B Page</p>
            <ul class="programImg tag">
                <li class="active">active</li>
                <li class="web">web</li>
                <li class="prog_lang js">javascript</li>
                <li class="sp">supabase</li>
            </ul>
            <img class="programImg" loading="lazy"decoding="async" src="img/project/web/cs_1.jpg" />
            <img class="programImg" loading="lazy"decoding="async" src="img/project/web/cs_2.jpg" />
            <img class="programImg" loading="lazy"decoding="async" src="img/project/web/cs_3.jpg" />
            <img class="programImg" loading="lazy"decoding="async" src="img/project/web/cs_4.jpg" />
            <img class="programImg" loading="lazy"decoding="async" src="img/project/web/cs_5.jpg" />
            

            <p class="programImg">First Web Project with pure HTML</p>
             <ul class="programImg tag">
                <li class="web">web</li>
            </ul>
            <img class="programImg" loading="lazy"decoding="async" src="img/project/web/pure_html.jpeg" />
            <img class="programImg" loading="lazy"decoding="async" src="img/project/web/pure_html_2.jpeg" />
            <img class="programImg" loading="lazy"decoding="async" src="img/project/web/pure_html_3.jpeg" />
            <img class="programImg" loading="lazy"decoding="async" src="img/project/web/pure_html_4.jpeg" />


            <p class="programImg">Cozy Corner Website</p>
             <ul class="programImg tag">
                <li class="web">web</li>
            </ul>
            <img class="programImg" loading="lazy"decoding="async" src="img/project/web/p5_01.webp" />
            <img class="programImg" loading="lazy"decoding="async" src="img/project/web/p5_02.webp" />
            <img class="programImg" loading="lazy"decoding="async" src="img/project/web/p5_03.webp" />
            <img class="programImg" loading="lazy"decoding="async" src="img/project/web/p5_04.webp" />
            <img class="programImg" loading="lazy"decoding="async" src="img/project/web/p5_05.webp" />


            <p class="programImg">TeacherABytre - <i>Special Teacher Day Website</i></p>
             <ul class="programImg tag">
                <li class="web">web</li>
                <li class="prog_lang js">javascript</li>
                <li class="fb">f<div>i</div>rebase</li>
            </ul>
            <img class="programImg" loading="lazy"decoding="async" src="img/project/web/p3_01.png" />
            <img class="programImg" loading="lazy"decoding="async" src="img/project/web/p3_02.png" />

            <p class="programImg">Activity Website</p>
            <ul class="programImg tag">
                <li class="web">web</li>
                <li class="prog_lang js">javascript</li>
            </ul>
            <img class="programImg" loading="lazy"decoding="async" src="img/project/web/p4_01.png" />
            <img class="programImg" loading="lazy"decoding="async" src="img/project/web/p4_02.png" />
            <img class="programImg" loading="lazy"decoding="async" src="img/project/web/p4_03.png" />

            <p class="programImg">CS1B Page Mobile</p>
            <ul class="programImg tag">
                <li class="active">active</li>
                <li class="webapp">webApp</li>
                <li class="sp">supabase</li>
            </ul>
            <img class="programImg" loading="lazy"decoding="async" src="img/project/web/cs_7.jpg" />
            <img class="programImg" loading="lazy"decoding="async" src="img/project/web/cs_8.jpg" />
            <img class="programImg" loading="lazy"decoding="async" src="img/project/web/cs_9.jpg" />
            <img class="programImg" loading="lazy"decoding="async" src="img/project/web/cs_10.jpg" />

            <p class="programImg">CareTrack - Android Application</p>
            <ul class="programImg tag">
                <li class="andr">android</li>
                <li class="fb">f<div>i</div>rebase</li>
            </ul>
            <img class="programImg" loading="lazy"decoding="async" src="img/project/caretrack/p1.jpg" />
            <img class="programImg" loading="lazy"decoding="async" src="img/project/caretrack/p2.jpg" />
            <img class="programImg" loading="lazy"decoding="async" src="img/project/caretrack/p3.jpg" />
            <img class="programImg" loading="lazy"decoding="async" src="img/project/caretrack/p4.jpg" />
            <img class="programImg" loading="lazy"decoding="async" src="img/project/caretrack/p5.jpg" />
            <img class="programImg" loading="lazy"decoding="async" src="img/project/caretrack/p6.jpg" />
            <img class="programImg" loading="lazy"decoding="async" src="img/project/caretrack/p7.jpg" />
            <img class="programImg" loading="lazy"decoding="async" src="img/project/caretrack/p8.jpg" />
        `;
    }

const images = document.querySelectorAll('.sketch img');
let currentIndex = 0;

function updateImage(direction) {
    viewerImage.classList.remove('slide-in', 'slide-out');
    viewerImage.classList.add('slide-out');

    setTimeout(() => {
        currentIndex =
            direction === 'next'
                ? (currentIndex + 1) % images.length
                : (currentIndex - 1 + images.length) % images.length;
        viewerImage.src = images[currentIndex].src;
        viewerImage.classList.remove('slide-out');
        viewerImage.classList.add('slide-in');
    }, 300);
}



// Close viewer
closeButton.addEventListener('click', () => {
    viewer.style.display = 'none';
});

// Navigation buttons
nextButton.addEventListener('click', () => updateImage('next'));
prevButton.addEventListener('click', () => updateImage('prev'));


    // Open viewer
images.forEach((img, index) => {
    img.addEventListener('click', () => {
        currentIndex = index;
        viewerImage.src = img.src;
        viewer.style.display = 'flex';
        viewerImage.classList.add('slide-in');
    });
});
    // Remove the active style from all buttons
    const buttons = document.querySelectorAll('.homeButtons button');
    buttons.forEach(button => {
        button.style.background = 'white';
        button.style.color = '#1da7ff';
    });

    // Apply the active style to the clicked button
    const clickedButton = document.querySelector(`.${buttonClass}`);
    clickedButton.style.background = 'linear-gradient(180deg, rgb(37, 204, 255) 5%, rgba(14,174,255,1) 98%)';
    clickedButton.style.color = 'white';

    // Hide all image2
    const allimage2 = document.querySelectorAll('.sketchImg, .digitalImg, .pubmatImg, .projectImg, .programImg');
    allimage2.forEach(image => {
        image.style.display = 'none';
    });

    // Show image2 for the selected category
    const selectedimage2 = document.querySelectorAll(`.${imageClass}`);
    selectedimage2.forEach(image => {
        image.style.display = 'block';
    });

}

// Add event listeners to buttons
document.querySelector('.button1').addEventListener('click', () => handleButtonClick('button1', 'digitalImg',1));
document.querySelector('.button2').addEventListener('click', () => handleButtonClick('button2', 'sketchImg',2));
document.querySelector('.button3').addEventListener('click', () => handleButtonClick('button3', 'pubmatImg',3));
document.querySelector('.button4').addEventListener('click', () => handleButtonClick('button4', 'projectImg',4));
document.querySelector('.button5').addEventListener('click', () => handleButtonClick('button5', 'programImg',5));

// Initialize with the default state
document.addEventListener('DOMContentLoaded', () => {
    handleButtonClick('button1', 'digitalImg');
});









// Select the back button
const backButton = document.querySelector('.back');

// Add a scroll event listener to the window
window.addEventListener('scroll', () => {
    // Calculate the scroll position
    const scrollPosition = window.scrollY;

    // Adjust the opacity to make the fade-out faster (lower threshold)
    const fadeOutOpacity = Math.max(1 - scrollPosition / 50, 0); // Now fades out over 150px scroll
    backButton.style.opacity = fadeOutOpacity.toString();
});




  