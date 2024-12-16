let currentStep = 1; // Passo atual
const totalSteps = document.querySelectorAll('.formStep').length; // Conta os passos disponíveis

function showStep(step) {
const steps = document.querySelectorAll('.formStep');
let stepFound = false;

// Itera por todos os passos e exibe apenas o correto
steps.forEach(stepDiv => {
    if (parseInt(stepDiv.getAttribute('data-step')) === step) {
    stepDiv.style.display = 'block';
    stepFound = true;
    } else {
    stepDiv.style.display = 'none';
    }
});

// Redireciona se não encontrar mais passos
if (!stepFound) {
    window.location.href = '/'; // Página de redirecionamento
}
}

// Evento dinâmico para os formulários
document.querySelectorAll('form').forEach(form => {
form.addEventListener('submit', function(e) {
    e.preventDefault();

    if (currentStep < totalSteps) {
    currentStep++;
    showStep(currentStep);
    } else {
    window.location.href = '/'; // Redireciona se não houver mais passos
    }
});
});

// Inicializa o primeiro passo
showStep(currentStep);
