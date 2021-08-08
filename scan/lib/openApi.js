/* <form onsubmit="mindeeSubmit(event)" >
  <input type="file" id="my-file-input" name="file" />
  <input type="submit" />
</form>

<script type="text/javascript">
const mindeeSubmit = (evt) => {
  evt.preventDefault()
  let myFileInput = document.getElementById('my-file-input');
  let myFile = myFileInput.files[0]
  if (!myFile) { return }
  let data = new FormData();
  data.append("document", myFile, myFile.name);

  let xhr = new XMLHttpRequest();

  xhr.addEventListener("readystatechange", function () {
    if (this.readyState === 4) {
      console.log(this.responseText);
    }
  });

  xhr.open("POST", "https://api.mindee.net/v1/products/mindee/expense_receipts/v3/predict");
  xhr.setRequestHeader("Authorization", "Token 06cde4e0a0b3a6c856bbe7a6383021ce");
  xhr.send(data);
}
</script> */
