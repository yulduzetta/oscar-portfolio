// assets/js/load-footer.js
fetch('assets/components/footer.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('footer-placeholder').innerHTML = data;
    });