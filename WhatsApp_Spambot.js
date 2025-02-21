let dataTransfer = new DataTransfer();
let box = document.querySelectorAll("[role=textbox]")[1];
if (!box) {
  alert("No chat open, Make sure you have opened the chat you want to spam.");
  throw new Error(
    "No chat open, Make sure you have opened the chat you want to spam."
  );
}

var count = prompt(
  "Enter number of messages: \nPlease Enter a number between 0 and 100000",
  "10"
);

if (!count || isNaN(count) || count < 0 || count > 100000) {
  alert(
    "Please enter only NUMBER between 0 and 100000. \nYou can re-run the script now."
  );
} else {
  var message = prompt("MESSAGE YOU WANT TO SPAM : ", "Hello from spammer...");
  if (message == null || message == "") {
    alert("Please enter a message to spam. \nYou can re-run the script now.");
  } else {
    console.clear();
    dataTransfer.setData("text/plain", message);
    (async () => {
      for (let i = 0; i < count; i++) {
        box.focus();
        box.dispatchEvent(
          new ClipboardEvent("paste", {
            clipboardData: dataTransfer,
            bubbles: true,
            cancelable: true,
          })
        );
        await new Promise((resolve) => setTimeout(resolve, 1000));
        box.parentElement.parentElement.parentElement.children[1].children[0].click();
        console.log(`"${message}" sent -> ${i + 1} times`);
      }
    })();
  }
}