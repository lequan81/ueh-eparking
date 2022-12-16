// javascript for create.html
const form = document.querySelector('form');

const btnGenerator = document.getElementById('generate-btn');
const toast = document.getElementById('toast');
const toastMessage = document.getElementById('toast-message');
const iconBtn = document.getElementById('icon-btn');
let toastShow = false;


function downloadImg() {
  // Image tag
  const img = qrcode.getElementsByTagName("img")[0];
  // Canvas tag
  const canvas = qrcode.getElementsByTagName("canvas")[0];

  // Padding to QRCode
  const padding = 40;

  // Adding padding to width and height
  canvas.width = canvas.width + padding;
  canvas.height = canvas.height + padding;

  // Canvas context
  const context = canvas.getContext("2d");
  // Clearing previous content
  context.clearRect(0, 0, canvas.width, canvas.height);
  // Making the background white
  context.fillStyle = "#ffffff";
  context.fillRect(0, 0, canvas.width, canvas.height);
  // Adding the image of QRCode
  // x and y are padding / 2
  context.drawImage(img, padding / 2, padding / 2);

  // Getting base64 url
  const image = canvas.toDataURL("image/png", 1);
  const filename = "QR_Code_" + Date.now() + ".png";
  downloadImage(image, filename);
}

function downloadImage(image, filename) {
  // Creating hidden <a> tag to download
  var element = document.createElement("a");
  element.setAttribute("href", image);
  element.setAttribute("download", filename);
  element.classList.add('hidden');
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
}

const showToastGenerator = () => {
  if (toastShow == false) {
    setTimeout(() => {
      toast.classList.remove('hidden');
      toast.innerHTML = /*html */`
      <svg aria-hidden="true" fill="currentColor" class="w-6 h-6 text-blue-600 dark:text-blue-500" focusable="false"
      role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z" clip-rule="evenodd" />
    </svg>
    <div class="pl-4 text-sm font-normal">
      <p id="toast-message">Generate QR code. Please wait...</p>
    </div>
      `;
    }, 500);
  }

  setTimeout(() => {
    toast.classList.add('hidden');
  }, 3500)
}

const showToastComplete = () => {
  if (toastShow == false) {
    setTimeout(() => {
      toast.classList.remove('hidden');
      toast.innerHTML = /*html */`
      <svg aria-hidden="true" fill="currentColor" class="w-6 h-6 text-green-600 dark:text-green-500" focusable="false"
      role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path fill-rule="evenodd" d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z" clip-rule="evenodd" />
    </svg>
    <div class="pl-4 text-sm font-normal">
      <p id="toast-message">QR code generate complete</p>
    </div>
      `;
    }, 2000);
  }

  setTimeout(() => {
    toast.classList.add('hidden');
  }, 2500)
}

const createQR = async (e) => {
  // validatePassword();
  e.preventDefault();

  showToastGenerator();

  var QR_CODE = new QRCode("qrcode", {
    width: 220,
    height: 220,
    colorDark: "#f26f33",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H,
  });

  let code = form.mssv.value + "_" + form.coupon.value;

  QR_CODE.makeCode(code);

  showToastComplete();

  setTimeout(() => {
    toastShow = true;
    btnGenerator.innerHTML = /* html */ `
    <span id="icon-btn" class="absolute inset-y-0 left-0 flex items-center pl-3">
            <!-- Heroicon name: qr -->
            <svg id="svg" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" class="w-5 h-5 text-gray-100 group-hover:text-gray-50">
              <path fill-rule="evenodd" d="M12 2.25a.75.75 0 01.75.75v11.69l3.22-3.22a.75.75 0 111.06 1.06l-4.5 4.5a.75.75 0 01-1.06 0l-4.5-4.5a.75.75 0 111.06-1.06l3.22 3.22V3a.75.75 0 01.75-.75zm-9 13.5a.75.75 0 01.75.75v2.25a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5V16.5a.75.75 0 011.5 0v2.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V16.5a.75.75 0 01.75-.75z" clip-rule="evenodd" />
            </svg>

          </span>Download QR Code
    `;
    // btnGenerator.setAttribute('id', 'downloadBtn');
  }, 1000)

  btnGenerator.addEventListener('click', () => {
    downloadImg();
    setTimeout(() => {
      toastShow = false;
    }, 1000)
  });

  /*     setTimeout(() => {
        window.location.replace('/');
      }, 9500); */
};

form.addEventListener('submit', createQR);