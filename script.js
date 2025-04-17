let MainInput = document.querySelector('#InputPriceCombain');
let attributeInputs = document.querySelectorAll('.InputPriceAttributes');
let recommendInput = document.querySelector('input[value="attr1"]'); 
let texttest = null;
let recomendText = null;

function updatePrice() {
  if (MainInput.checked) {
    let totalPrice = Number(MainInput.getAttribute('data-price'));
    let totalPriceNDS = Number(MainInput.getAttribute('data-price'));

    // Проверяем каждый атрибут
    for (let i = 0; i < attributeInputs.length; i++) {
      if (attributeInputs[i].checked) {
        totalPrice = totalPrice + Number(attributeInputs[i].getAttribute('data-price'));
      }
    }

    // создаем или обновляем p для цены
    if (!texttest) {
      texttest = document.createElement('p');
      textNds = document.createElement('p');
      document.body.appendChild(texttest);
      document.body.appendChild(textNds);
    }
    texttest.textContent = `Цена: ${totalPrice} тенге`;
    textNds.textContent = `Цена с НДС 20%: ${totalPrice * 1.2} тенге`;
  } else {
    if (texttest) {
      texttest.remove();
      textNds.remove();
      texttest = null;
      textNds = null;
    }
    if (recomendText) {
      recomendText.remove();
      recomendText = null;
    }
  }

  // Рекомендация для attr1 только если комбайн включен
  if (MainInput.checked && recommendInput.checked) {
    if (!recomendText) {
      recomendText = document.createElement('p');
      recomendText.textContent = `Рекомендуется купить увеличенный бункер (attr5)`; // attr5, так как это бункер
      recomendText.style.color = 'red';
      document.body.appendChild(recomendText);
    }
  } else {
    if (recomendText) {
      recomendText.remove();
      recomendText = null;
    }
  }
}

// В случае смены чекбокса у комбайна вызываем updateprice
MainInput.addEventListener('change', function () {
  updatePrice();
});

// Проверяем чекбоксы меняем цену
for (let i = 0; i < attributeInputs.length; i++) {
  attributeInputs[i].addEventListener('change', function () {
    updatePrice();
  });
}