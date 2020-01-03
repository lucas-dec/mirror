const commentList = [...document.querySelectorAll('.comment')];
const commentators = [...document.querySelectorAll('.commentator')];
let indexComment = 0;
let indexSetInterval = 0;


const changeCommentator = () => {
    const activeCommentator = commentators.findIndex(commentator => commentator.classList.contains('active'));
    commentators[activeCommentator].classList.remove('active');
    commentators[indexComment].classList.add('active');
}

const changeComment = () => {
    indexComment++
    if (indexComment == commentList.length) indexComment = 0;
    const activeComment = commentList.findIndex(comment => comment.classList.contains('active'));
    commentList[activeComment].classList.remove('active');
    commentList[indexComment].classList.add('active');

    changeCommentator();
    
}
indexSetInterval = setInterval(changeComment, 5000);

const arrowLeft = document.querySelector(".arrow.left");
const arrowRight = document.querySelector(".arrow.right");

const left = ()=>{
    const activeComment = commentators.findIndex(commentator => commentator.classList.contains('active'));
    indexComment--
    if (indexComment < 0) indexComment = 2;
    commentList[activeComment].classList.remove('active');
    commentList[indexComment].classList.add('active');

    changeCommentator();
    clearInterval(indexSetInterval);

}
arrowLeft.addEventListener("click", left)

const right = ()=>{
    const activeComment = commentators.findIndex(commentator => commentator.classList.contains('active'));
    indexComment++
    if (indexComment == commentList.length) indexComment = 0;
    commentList[activeComment].classList.remove('active');
    commentList[indexComment].classList.add('active');

    changeCommentator();
    clearInterval(indexSetInterval);
}
arrowRight.addEventListener("click", right)

$('a[href^="#"]').on('click', function (event) {
  
    var target = $($(this).attr('href'));

    if (target.length) {
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top - 60
      }, 1000);
    }
  });
