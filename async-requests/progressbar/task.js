function upload(file) {

      let xhr = new XMLHttpRequest();

   
      xhr.upload.onprogress = function(event) {
        let loadProgress = event.loaded  / event.total;
        document.getElementById("progress").value = loadProgress; 
      }

      xhr.upload.onload = function() {
        alert( 'Данные полностью загружены на сервер!' );
      }
      xhr.upload.onerror = function() {
        alert( 'Произошла ошибка при загрузке данных на сервер!' );
      }

      xhr.open("POST", "https://netology-slow-rest.herokuapp.com/upload.php", true);
      xhr.send(file);
}




 document.forms.form.onsubmit = function() {  
      let file = this.elements.file.files[0];
      if (file) {
        upload(file);
      }
      return false;
     }




      