$(document).ready(() => {
    let index = 1;
    disableButtonToggle();

    while(index <= 5 && index <= imgs.length){
        $('.cards-table').append(getCardTemplate(index, imgs[index - 1]));
        ++index;
        insertGetBonusText();
        disableButtonToggle(index > imgs.length);
    }

    $(window).resize(() => {
        insertGetBonusText();
    });

    selectCasino()
    seeAll(index);

})

const imgs = [
    './assets/casino/r_logo.svg',
    './assets/casino/lvbet_logo.svg', 
    './assets/casino/888_logo.svg', 
    './assets/casino/friday_logo.svg',
    './assets/casino/star_logo.svg',
    './assets/casino/r_logo.svg',
    './assets/casino/lvbet_logo.svg', 
    './assets/casino/888_logo.svg', 
    './assets/casino/friday_logo.svg',
    './assets/casino/star_logo.svg',
]

function insertGetBonusText(){
    ($(window).width() < 414) ? $('.get-bonus').text('Visit Casino') : $('.get-bonus').text('Get Bonus');
}

function disableButtonToggle(isDisabled = true, selector = '#seeAll'){
    $(selector).prop('disabled', isDisabled);
}

function selectCasino(){
    $(document).on('mouseover', function(event){
        if($(event.target).hasClass('card-cell')) {
            if($('.selected').length){
                $('.selected').remove()
            } else {
                $(event.target).append('<div class="selected"></div>');

            }
        } else {
            $('.selected').remove()
        }
    })
}

const getCardTemplate = (cardIndex, img) => {
    return `
    <div class="card-cell num">${cardIndex}</div>
    <div class="card-cell logo"><img class="casino-img" src=${img}></div>
    <div class="card-cell bonus">
        <span>100% up to</span>
        <span class="green-txt"> €100+100 FS</span>
        <span class="bonus-spins">+300 bonus Spins</span>
    </div>
    <div class="card-cell rating">
            <span class="rate">
              <input type="radio" id="star5-0" name="rate" value="5" />
              <label for="star5-0"></label>
              <input type="radio" id="star4-0" name="rate" value="4" />
              <label for="star4-0"></label>
              <input type="radio" id="star3-0" name="rate" value="3" />
              <label for="star3-0"></label>
              <input type="radio" id="star2-0" name="rate" value="2" />
              <label for="star2-0"></label>
              <input type="radio" id="star1-0" name="rate" value="1" />
              <label for="star1-0"></label>
            </span>
        <span class="rate-calc">8.45</span>
        <span class="link link-txt">Read Review</span></td>
    </div>
    <div class="card-cell deposit">
        <div class="logo-grid">
            <img src="./assets/deposit_logos/4.svg">
            <img src="./assets/deposit_logos/7.svg">
            <img src="./assets/deposit_logos/8.svg">
            <img src="./assets/deposit_logos/9.svg">
            <img src="./assets/deposit_logos/10.svg">
            <img src="./assets/deposit_logos/11.svg">
        </div>
    </div>
    <div class="card-cell play-now">
        <button class="get-bonus" type='button'></button>
    </div>
    `
}

function seeAll(index){
    $('#seeAll').click(function () {
        let lastImgIndex = ((index + 2) < imgs.length) ? (index + 2) : imgs.length;
        const seeAllImgs = imgs.slice(index - 1, lastImgIndex);
        seeAllImgs.forEach((img, i) => {
            $('.cards-table').append(getCardTemplate(index + i, img))
        });
        index += 3;
        insertGetBonusText();
        disableButtonToggle(index >= imgs.length);
    });
}
