// انا لزم اشوفو فى نوشن عشان اقدر افهمو 


// هيكون عندنا ديف و هنخارلو لون من الالوان الى معروضة 

// فا بيكون فى الون اكتيف اول لما ادوس على اللون تانى يبق هو الى اكتيف 

let lis = document.querySelectorAll(`ul li`);

let exp = document.querySelector(`.experiment`);

lis.forEach((li) => {
    li.addEventListener('click',function(e) {
        console.log(e.currentTarget.dataset.color);  // هو لسة مشرحش دى بس هو قال انا عامل دا عشان يتاكد من حاجة معينة بس وظيفتها انها اول لما ادوس على اى لون هيكتب اللون بتاعو
    
        // remove active class from all lis 

       lis.forEach(li => {
        li.classList.remove(`active`);
       })

    //    add active class to current element

        e.currentTarget.classList.add(`active`);

        // add current color to local storage 

        // الى انا كنت عاملو فوق ساعت الكونسول اهو حطيتو هنا لية عشان انقلو فى اللوكل 

        //يعنى انا ممكن اكتب مثلا فونت لة بصيت على اللكول هتلقى فى الكى مكتوب فونتkey  الى انا كاتبو دوت دا بتاع ال color يعنى اول لما ادوس على اللون هيكتبو فى اللوكل و 

        window.localStorage.setItem(`color2` , e.currentTarget.dataset.color);
    
        // تعال على مرحلة ان انا انقل اللون دا فى الديف افضل اغير اللون 
       
        exp.style.background = e.currentTarget.dataset.color
    });
});

// هو يعتبر خالصنا بس الفكرة ان انا لو عملت رفريش كدة 

// يعتبر ولا اكنى عاملت حاجة فا الى هو انا عاملتو انا 

// ضفت بس فى اللوكل استورج

// ---

// فا انا محتاج اعرف ان اللون موجود فى اللوكل استورج ولا 

// لا وبنائا علية هعمل حاجة ولا لا و لو مش موجود هعمل حاجة تانية

// انا بس عايز اتاكد اللون موجود فى اللوكل استورج ولا

// u have to focus i wrote getItem()

//  exp.style.background = window.localStorage.getItem('color');فا الكود دا هو الى بيخالى اول لما اقفل الصفحة وافتحا يعمل الى انا كنت عاملو اخر مرة 


// ##################


//  اكتشفت علطة كمان والى هى انا اما كنت بعمل رفريش القى اللون بتاع 

// الجسم هو بس الى بيتغير مش الديف كمان علجت ازاى المشكلة دى 

// color 2 غيرت اسم الكى بتاع اللوكل استورج بس و سميتو اى اسم سميتو


//  ##################


// الخطوات الاخيرة الى هى انا عايز اعمل اول لما اعمل رفريش يكون الاكتيف على اللون الى علية اخر مرة ميكونش على اول واحد زاى ما كنا شرحينو 

// وكل دا بنعملو جواه ايف و بنجطو فى اللوكل استورج



if (window.localStorage.getItem(`color2`)){
    console.log('yes');

    // [1] add color to div 

    exp.style.background = window.localStorage.getItem('color2');

    // [2] remove active class from all lis

        lis.forEach((li) => {
            li.classList.remove('active');
        })


        // [3] add active class to current color 

        document.querySelector(`[data-color="${window.localStorage.getItem('color2')}"]`).classList.add('active');
    
}else{
    console.log(`no`);
}




 let uu = document.querySelectorAll(`.hi li`);  // all وابن الكلب دا مكنش عايز يشتغل بسبب ام ان انا مش كاتب 

 let tt = document.querySelector(`.experiment`);  // all احااااا كان مش عايز يشتغل عشان ككنت عامل كسم 
 let bo = document.body;  // all احااااا كان مش عايز يشتغل عشان ككنت عامل كسم 

 uu.forEach(function(li){
    li.addEventListener('click', function(e){
        console.log(e.currentTarget.dataset.color);
        
        uu.forEach((li) => {
            li.classList.remove(`active2`); 
        })

        e.currentTarget.classList.add(`active2`);

        window.localStorage.setItem('color', e.currentTarget.dataset.color);
    //   tt.style.background = e.currentTarget.dataset.color
    bo.style.background = e.currentTarget.dataset.color
    })
})

if ( window.localStorage.getItem('color')) {
    console.log(`yes`)
   // tt.style.background = window.localStorage.getItem('color'); // window.localStorage.getItem('color') ودى بغلط فيها كتيراوى لزم اقول يساوى 
    
   document.body.style.background = window.localStorage.getItem('color');  // عشان اعرف اضبتها اعمل على الكونتينر بدل البادى هيضبط انا حاسس و 

    lis.forEach((li) => {
        li.classList.remove('active2');
    })


    // [3] add active class to current color 

    document.querySelector(`[data-color="${window.localStorage.getItem('color')}"]`).classList.add('active2')


}else{
    console.log(`no`) ;
}

// دا لزم اشوفو فى نوشن 

// فى غلطة وقعت فيها وهى ان انا مكنتش عامل على الكلاث الى اسمو 

// اكتيف يكون الاوبستى بتاعو يكون 1 يعنى عشان انا كنت اما ادوس على 

// مربع من دول يمسح الكلس من المربع القديم ويحطو فى المربع الجديد 

// الى تحت ul li الى دوست علية اهو زاى كدة انا عاملت فى ال 

// كلاث تانى اسمو اكتيف 2 عشان الاتنين يتعملو اهو 



// ################################################################


//  المشكلة دلوقتى ان انا لما اعمل رفريش الاكتيف بيجى على اول وحدة 

// لية عشان انا عامل كلاث الاكتيف دا  فى اول واحد فى ملف الاتش اتى 

// امل فا لزم اضيفو فى اللوكل استورج