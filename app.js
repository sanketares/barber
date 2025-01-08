document.getElementById('customerForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const visitDate = document.getElementById('visitDate').value;

    const response = await fetch('https://your-heroku-or-render-backend-url/customers', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, phone, visitDate })
    });

    if (response.ok) {
        alert('Customer added successfully');
        loadCustomerList();
    }
});

async function loadCustomerList() {
    const response = await fetch('https://your-heroku-or-render-backend-url/customers');
    const customers = await response.json();
    const customerList = document.getElementById('customerList');
    customerList.innerHTML = '';
    customers.forEach(customer => {
        customerList.innerHTML += `<p>${customer.name} (${customer.phone}) - Visit Date: ${customer.visitDate}</p>`;
    });
}

loadCustomerList();
