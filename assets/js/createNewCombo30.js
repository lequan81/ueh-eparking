// javascript for create.html
const form = document.querySelector('form');

const buyBtn = document.getElementById('buycombo');

const createNewCombo10 = async (e) => {
  // validatePassword();

  e.preventDefault();
  Toastify({
    text: "Hệ thống đang xử lý... \n Vui lòng đợi trong giây lát...",
    duration: 5000,
    destination: "/",
    newWindow: true,
    close: false,
    gravity: "top", // `top` or `bottom`
    position: "center", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: "#28418c",
      padding: "20px",
      fontSize: "18px",
      borderRadius: "6px"
    },
    onClick: function () { } // Callback after click
  }).showToast();

  const doc = {
    mssv: form.mssv.value,
    username: form.username.value,
    email: form.email.value,
    bienso: form.bienso.value,
    sdt: form.phonenumber.value,
    quantity: form.quantity.value,
    amount: form.quantity.value * 30,
    date: (new Date()).toLocaleDateString('en-GB').split('/').join('-'),
    time: (new Date()).toLocaleString().split(',')[0],
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
        fontSize: "18px",
        borderRadius: "6px"
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
          fontSize: "18px",
          borderRadius: "6px"
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