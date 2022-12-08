// javascript for create.html
const form = document.querySelector('form');
// const message = document.getElementById('alert');

/* const Dismiss = (event) => {
  let element = event.target;
  while (element.nodeName !== "BUTTON") {
    element = element.parentNode;
  }
  element.parentNode.parentNode.removeChild(element.parentNode);
}
 */
// let template = '';



/* const validatePassword = () => {

  var password = form.password.value;
  var repeatPassword = form.repeatPassword.value;
  if (password != repeatPassword) {
    console.log('Password Mismatched!')
  } else {
    console.log('Password Matched!')
  }
}

function wrong_pass_alert() {
  if (form.password.value != "" &&
    form.repeatPassword.value != "") {
    alert("Your response is submitted");
  } else {
    alert("Please fill all the fields");
  }
} */

const buyBtn = document.getElementById('buycombo');

/* buyBtn.onclick = () => {
  console.log("click");
  form.submit();
}
 */
const createNewCombo10 = async (e) => {
  // validatePassword();

  e.preventDefault();
  console.log(form.username.value);

  const doc = {
    mssv: form.mssv.value,
    username: form.username.value,
    email: form.email.value,
    bienso: form.bienso.value,
    sdt: form.phonenumber.value,
    amount: form.quantity.value * 30,
  }

  let res = await fetch('https://superficial-east-cake.glitch.me/data', {
    method: 'POST',
    body: JSON.stringify(doc),
    headers: { 'Content-Type': 'application/json' }
  });

  if (res.ok) {
    console.log('ok');

    Toastify({
      text: " Đăng ký Combo 10 lượt thành công! ",
      duration: 4000,
      destination: "/",
      newWindow: true,
      close: false,
      gravity: "top", // `top` or `bottom`
      position: "center", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background: "#2dc997",
        padding: "20px",
        fontSize: "20px"
      },
      onClick: function () { } // Callback after click
    }).showToast();

    setTimeout(() => {
      Toastify({
        text: "  UEH E-Parking đã tiếp nhận đăng kí và gửi cho bạn mã coupon nhận QR code qua email sau 1-2 ngày làm việc ",
        duration: 6000,
        destination: "/",
        newWindow: true,
        close: false,
        gravity: "top", // `top` or `bottom`
        position: "center", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "#2dc997",
          padding: "20px",
          fontSize: "20px"
        },
        onClick: function () { } // Callback after click
      }).showToast();
    }, 3000);

    setTimeout(() => {
      window.location.replace('/');
    }, 9500);
  };
}

form.addEventListener('submit', createNewCombo10);