const toggleBtn = document.querySelector('.navbar_toggleBtn');
const menu = document.querySelector('.navbar_menu');

toggleBtn.addEventListener('click', e => {
    e.preventDefault();
    menu.classList.toggle('active');
    document.querySelector('.navbar_toggleBtn i').classList.toggle('fa-xmark');
    document.querySelector('.navbar_toggleBtn i').classList.toggle('fa-solid');
    document.querySelector('.navbar_toggleBtn i').classList.toggle('fa-bars');
});

$(function(){
    $("#shot").on("click", function(){
			// 캡쳐 라이브러리를 통해서 canvas 오브젝트를 받고 이미지 파일로 리턴한다.
      html2canvas(document.querySelector("#test_capture")).then(canvas => {
				saveAs(canvas.toDataURL('image/jpg'),"capture-test.jpg");

			});
    });
    function saveAs(uri, filename) { 
			// 캡쳐된 파일을 이미지 파일로 내보낸다.
      var link = document.createElement('a'); 
      if (typeof link.download === 'string') { 
        link.href = uri; 
        link.download = filename; 
        document.body.appendChild(link); 
        link.click(); 
        document.body.removeChild(link); 
      } else { 
        window.open(uri); 
      } 
    }
  });