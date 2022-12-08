const form = document.querySelector('form');

const checkData = async (e) => {
  e.preventDefault();

  fetch('/data')
    .then(res => res.json())
    .then(data => {
      data.forEach(e => {
        console.log(`${e.username}, ${e.password}`);
        if (form.username.value === e.username && form.password.value === e.password 
          || form.username.value === e.email && form.password.value === e.password) {
            alert('Đăng nhập thành công!!!');
            setTimeout(() => {
              window.location.replace('/default.html');
            }, 4000);
          }
      })
      }
    )
    .catch(err => { throw err });
}

form.addEventListener('submit', checkData);