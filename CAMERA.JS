



const videoElement = document.querySelector('#video')
var datacompleta;
var nomearquivo;
var placa;
var canvas = document.querySelector("#canvas");



function ligarCamera() {
    navigator.mediaDevices.getUserMedia({ video: true }).then(function (mediaStream) {
        const video = document.querySelector('#video');
        video.srcObject = mediaStream;
        video.play();
       

    })
}
function tiraFoto() {


        const video = document.querySelector('#video');
      const canvas = document.querySelector("#canvas");
        canvas.height = video.videoHeight;
        canvas.width = video.videoWidth;
   
    const image = canvas.toDataURL("image/png");
 

        var context = canvas.getContext('2d');
       
        context.drawImage(video, 0, 0);
       
 
  
  

    

    salvar();

     
   
}
//}
function salvar() {
    var dados = {};
 
    //Remover os caracteres que são adionados por padão antes do Base64 da imagem (data:image/png;base64,).
    //Pois só depois disso vem o Base64 que precisamos salvar.
                            /*/dados.base64 = base64.substr(base64.indexOf(',') + 1, base64.length);
    //Base64 original:data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAABQCAYAAADvLIfGAAAH9ElEQVR4nO...
    //Base64 correta:iVBORw0KGgoAAAANSUhEUgAAAfQAAABQCAYAAADvLIfGAAAH9ElEQVR4nO...

    //const saveBtn = document.getElementById("capturar");
    //const canvas = document.querySelector("#canvas");

    //$.ajax({
    //    type: 'post',
    //    url: 'http://localhost/autorizados/save.php',
    //    data: { dados },
    //      success: function (data) {
    //          alert('ok');
          
    //    } /* ... */
    //});

    const canvas = document.querySelector("#canvas");
    var base64 = canvas.toDataURL("image/png");
    var url= 'http://localhost/autorizados/save.php';
     $.ajax({
        
         type: 'POST',
         url: url,
         data: {
             base64data: base64,
             identifier: '2'
         },
        success: function (data) {
            console.log(data);
        }
         , error: function (xmlHttpRequest, status, err) {
            alert("Ocorreu o seguinte erro:" + xmlHttpRequest.responseText)
        }
    });


    //saveAs(blob, "pretty image.png");

    //var link = document.createElement('a');
    //link.download = 'filename.png';
    //link.href = document.getElementById('canvas').toDataURL()
    //link.click();



   
    //function downLoad() {

    //    //this.fileService.getFileFromServer(fileId.toString()).subscribe(respData => {
    //    //    this.downLoadFile(respData, this.type);
    //    //}, error => {

    //    //});

    //    byte[] data = webClient.DownloadData(dataURI);

    //    using(MemoryStream mem = new MemoryStream(data))
    //    {
    //        using(var yourImage = Image.FromStream(mem))
    //            {
    //                // If you want it as Png
    //                yourImage.Save("path_to_your_file.png", ImageFormat.Png);

    //        // If you want it as Jpeg
    //        yourImage.Save("path_to_your_file.jpg", ImageFormat.Jpeg);
    //    }
    //}
    //    var blob = new Blob(dataURI, { type: type.toDataURL });
    //    var url = window.URL.createObjectURL(blob);
    //    var pwa = window.open(url);
    //    if (!pwa || pwa.closed || typeof pwa.closed == 'undefined') {
    //        console.log('Please disable your Pop-up blocker and try again');
    //    }


    //}
}


    //var src = "C:\dados";

    //    var link = document.createElement("a");

    //    link.setAttribute("href", base64);
    //link.setAttribute("download", "imagemteste");

    //    link.click();

    //console.log(link.setAttribute("download", "imagemteste");



    //cava.toBlob(function (blob) {
    //    saveAs(blob, 'image.png')
    //});

    //http.open("POST", "C:\dados", true);
    //http.setRequestHeader("Content-type", "text/plain"); // Talvez o Content-type pode ser outro, não tenho certeza quanto a isso
    //const imgUrl = URL.createObjectURL
    //console.log(canvas);


    //http.onreadystatechange = function () {//Call a function when the state changes.
    //    if (http.readyState == 4 && http.status == 200) {
    //        alert("Imagem salvada com sucesso");
    //    }
    //}



    //Base64 original:data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAABQCAYAAADvLIfGAAAH9ElEQVR4nO...
    //Base64 correta:iVBORw0KGgoAAAANSUhEUgAAAfQAAABQCAYAAADvLIfGAAAH9ElEQVR4nO...
    //$.ajax({
    //    type: 'POST',
    //    //Chamar o webmethod SalvarImagem em webservice.asmx
    //    url: "C:\Users\renan.pilz\Pictures\teste",
    //    contentType: 'application/json; ceharset=utf-8',
    //    dataType: 'json',
    //    //enviar o base64 como parâmetro
    //    data: JSON.stringify(dados),
    //    success: function (data) {
    //        alert(data.d);
    //    }
    //    , error: function (xmlHttpRequest, status, err) {
    //        alert("Ocorreu o seguinte erro:" + xmlHttpRequest.responseText)
    //    }
    //});




