const formvalid = () => {
    var pass = document.getElementById("pass").value;
  
    if (pass.length <= 8 || pass.length >= 20)
    {
      document.getElementById("vaild-pass").innerHTML = "Minimum 8 characters";
      return false;
    }
    else
    {
      document.getElementById("vaild-pass").innerHTML = "";
    }
}
  
const show = () => {
    var x = document.getElementById("pass");
    if (x.type === "password")
    {
      x.type = "text";
      document.getElementById("showimg").src =
        "https://static.thenounproject.com/png/777494-200.png";
    }
    else
    {
      x.type = "password";
      document.getElementById("showimg").src =
        "https://cdn2.iconfinder.com/data/icons/basic-ui-interface-v-2/32/hide-512.png";
    }
}
  