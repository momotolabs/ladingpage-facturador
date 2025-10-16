document.addEventListener('DOMContentLoaded', function () {

  const planData = {
    plans: [
      {
        name: 'Profesional',
        price: '9.50',
        idealFor: 'Profesionales independientes y microempresas',
        features: [
          { name: 'Hasta <strong>150</strong> DTEs por mes', value: 'Hasta 150', included: true },
          { name: '<strong>1</strong> Usuario Incluido', value: '1', included: true },
          { name: '<strong>$0.09</strong> ctvs por DTE adicional', value: '1 GB', included: true },
          { name: 'Habilitación "Guante Blanco"', value: '✓', included: true },
          { name: 'Soporte por Email', value: '✓', included: true },
          { name: 'Panel de Negocios Básico', value: '✓', included: true },
          { name: 'Creación y transmisión de DTE central', value: '✓', included: true },
          { name: 'Seguimiento de estado y notificaciones', value: '✓', included: true },
          { name: 'Catalogo de productos/servicios', value: '✓', included: true },
          { name: 'Base de datos de clientes', value: '✓', included: true },
        ],
        theme: { header: 'bg-gray-500', button: 'bg-gray-600 hover:bg-gray-700' }
      },
      {
        name: 'Negocios',
        price: '19.50',
        idealFor: 'PYMES en crecimiento',
        isPopular: true,
        features: [
          { name: 'Hasta <strong>500</strong> DTEs por mes', value: 'Hasta 500', included: true },
          { name: '<strong>3</strong> Usuarios Incluidos', value: '3', included: true },
          { name: '<strong>$0.08</strong> ctvs por DTE adicional', value: '5 GB', included: true },
          { name: 'Habilitación "Guante Blanco"', value: '✓', included: true },
          { name: 'Soporte por Email', value: '✓', included: true },
          { name: 'Panel de Negocios Básico', value: '✓', included: true },
          { name: 'Creación y transmisión de DTE central', value: '✓', included: true },
          { name: 'Seguimiento de estado y notificaciones', value: '✓', included: true },
          { name: 'Catalogo de productos/servicios', value: '✓', included: true },
          { name: 'Base de datos de clientes', value: '✓', included: true },
        ],
        theme: { header: 'bg-momoto-blue', button: 'bg-momoto-blue hover:bg-blue-900' }
      },
      {
        name: 'Crecimiento',
        price: '39.50',
        idealFor: 'Empresas con mayor volumen y equipos',
        features: [
          { name: 'Hasta <strong>1,500</strong> DTEs por mes', value: 'Hasta 500', included: true },
          { name: '<strong>10</strong> Usuarios Incluidos', value: '3', included: true },
          { name: '<strong>$0.07</strong> ctvs por DTE adicional', value: '5 GB', included: true },
          { name: 'Habilitación "Guante Blanco"', value: '✓', included: true },
          { name: 'Soporte por Email', value: '✓', included: true },
          { name: 'Panel de Negocios Básico', value: '✓', included: true },
          { name: 'Creación y transmisión de DTE central', value: '✓', included: true },
          { name: 'Seguimiento de estado y notificaciones', value: '✓', included: true },
          { name: 'Catalogo de productos/servicios', value: '✓', included: true },
          { name: 'Base de datos de clientes', value: '✓', included: true },
        ],
        theme: { header: 'bg-momoto-purple', button: 'bg-momoto-purple hover:bg-purple-800' }
      },
      {
        name: 'Corporativo',
        price: 'Contáctanos',
        idealFor: 'Grandes empresas con requisitos únicos',
        features: [
          { name: 'Personalizado basado en necesidades específicas', value: 'Ilimitados', included: true },
          { name: 'Recomendado para empresas grandes, integradores de software o negocios con requisitos únicos', value: 'Personalizado', included: true },
          { name: 'Funciones personalizadas, DTEs ilimitados, infraestructura dedicada, soporte premium, capacitación personalizada.', value: 'Personalizado', included: true },
        ],
        theme: { header: 'bg-gray-800', button: 'bg-gray-800 hover:bg-gray-900' }
      }
    ],
    featureLabels: [
      'DTEs por Mes', 'Usuarios Incluidos', 'Límite de Datos', 'Cuota de envío de correos',
      'Habilitación "Guante Blanco"', 'Soporte (Email, WhatsApp)', 'Panel de Negocios Básico',
      'Catálogo de productos/servicios', 'Base de datos de clientes', 'Reportes Avanzados',
      'Acceso a la API', 'Soporte prioritario'
    ],
    addons: [
      { name: 'Módulo de Inventario Básico', subTitle: 'Próximamente' },
      { name: 'Punto de ventas', subTitle: 'Próximamente' },
      { name: 'Paquete de Usuarios Adicionales', subTitle: 'Próximamente' },
      { name: 'Paquete de POS Adicionales', subTitle: 'Próximamente' }
    ]
  };

  const planCardsContainer = document.getElementById('planCards');
  const planTableContainer = document.getElementById('planTable');
  const tableHeaderContainer = document.getElementById('tableHeader');
  const tableBodyContainer = document.getElementById('tableBody');
  const viewToggle = document.getElementById('viewToggle');
  const addonsContainer = document.getElementById('addons');

  function renderPlanCards() {
    planCardsContainer.innerHTML = planData.plans.map(plan => `
                    <div class="transition-all hover:-translate-y-2 ease-in-out duration-400 hover:shadow-custom-size bg-white rounded-xl shadow-lg flex flex-col ${plan.isPopular ? 'border-4 border-momoto-blue' : ''}">
                        ${plan.isPopular ? '<div class="bg-momoto-blue text-white text-center py-1 font-bold text-sm rounded-t-lg">Más Popular</div>' : ''}
                        <div class="p-8 flex-grow flex flex-col">
                            <h3 class="text-2xl font-bold text-center ${plan.name === 'Negocios' ? 'text-momoto-blue' : (plan.name === 'Crecimiento' ? 'text-momoto-purple' : 'text-gray-800')}">${plan.name}</h3>
                            <p class="text-center text-gray-500 mt-2 min-h-[40px]">${plan.idealFor}</p>
                            <div class="my-6 text-center">
                                ${plan.price === 'Contáctanos' ? `
                                    <span class="text-4xl font-extrabold">${plan.price}</span>
                                ` : `
                                    <span class="text-5xl font-extrabold">$${plan.price}</span>
                                    <span class="text-gray-500">/mes</span>
                                `}
                            </div>
                            <ul class="space-y-3 text-gray-600 mb-8 flex-grow text-sm">
                                ${plan.features.map(feature => `
                                    <li class="flex items-start">
                                        <span class="${feature.included ? 'text-momoto-red' : 'text-gray-400'} mr-2 font-bold">${feature.included ? '✓' : '—'}</span>
                                        <span>${feature.name}</span>
                                    </li>
                                `).join('')}
                            </ul>
                            <a href="#cta" class="${plan.theme.button} text-white font-bold py-3 px-6 rounded-lg w-full text-center transition block">
                                ${plan.price === 'Contáctanos' ? 'Contactar Ventas' : 'Elegir Plan'}
                            </a>
                        </div>
                    </div>
                `).join('');
  }

  function renderPlanTable() {
    tableHeaderContainer.innerHTML = `
                    <tr>
                        <th scope="col" class="px-6 py-3">Características</th>
                        ${planData.plans.map(plan => `
                            <th scope="col" class="px-6 py-3 text-center ${plan.isPopular ? 'bg-momoto-red' : ''}">
                                ${plan.name}
                                ${plan.isPopular ? '<br><span class="font-normal text-xs">(Más Popular)</span>' : ''}
                            </th>
                        `).join('')}
                    </tr>
                `;

    tableBodyContainer.innerHTML = planData.featureLabels.map((featureLabel, index) => `
                    <tr class="bg-white border-b border-gray-200 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">${featureLabel}</th>
                        ${planData.plans.map(plan => {
      const feature = plan.features.find(f => f.name === featureLabel);
      return `
                                <td class="px-6 py-4 text-center">
                                    <span class="${feature && feature.included ? 'text-momoto-red font-bold text-xl' : 'text-gray-400 text-xl'}">
                                        ${feature ? feature.value : '-'}
                                    </span>
                                </td>
                            `;
    }).join('')}
                    </tr>
                `).join('');
  }

  function renderAddons() {
    addonsContainer.innerHTML = planData.addons.map(addon => `
                    <div class="bg-white p-4 rounded-lg shadow-md text-center flex justify-between flex-col">
                        <p class="font-bold text-gray-700">${addon.name}</p>
                        <p class="text-momoto-blue font-bold mt-1">${addon.subTitle}</p>
                    </div>
                `).join('');
  }

  viewToggle.addEventListener('change', () => {
    if (viewToggle.checked) {
      planCardsContainer.classList.add('hidden');
      planTableContainer.classList.remove('hidden');
    } else {
      planCardsContainer.classList.remove('hidden');
      planTableContainer.classList.add('hidden');
    }
  });

  renderPlanCards();
  renderPlanTable();
  renderAddons();

  const ctx = document.getElementById('plansChart').getContext('2d');
  let plansChart;

  function getChartData(metric) {
    let data, label;
    switch (metric) {
      case 'users':
        data = [1, 3, 10, 15]; // Assume 15 for corporate for visualization
        label = 'Usuarios Incluidos';
        break;
      case 'storage':
        data = [1, 5, 20, 50]; // Assume 50GB for corporate
        label = 'Límite de Datos (GB)';
        break;
      case 'emails':
        data = [200, 800, 2000, 5000]; // Assume 5000 for corporate
        label = 'Cuota de envío de correos';
        break;
      case 'dtes':
      default:
        data = [150, 500, 1500, 5000]; // Assume 5000 for corporate
        label = 'DTEs por Mes';
        break;
    }
    return { data, label };
  }

  function createOrUpdateChart(metric) {
    const { data, label } = getChartData(metric);

    if (plansChart) {
      plansChart.data.datasets[0].data = data;
      plansChart.data.datasets[0].label = label;
      plansChart.update();
    } else {
      plansChart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: planData.plans.map(p => p.name),
          datasets: [{
            label: label,
            data: data,
            backgroundColor: [
              'rgba(107, 114, 128, 0.7)',
              'rgba(0, 0, 139, 0.7)',
              'rgba(138, 43, 226, 0.7)',
              'rgba(55, 65, 81, 0.7)'
            ],
            borderColor: [
              'rgb(107, 114, 128)',
              'rgb(0, 0, 139)',
              'rgb(138, 43, 226)',
              'rgb(55, 65, 81)'
            ],
            borderWidth: 1
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: {
              beginAtZero: true,
              ticks: {
                color: '#333'
              },
              grid: {
                color: '#e5e7eb'
              }
            },
            x: {
              ticks: {
                color: '#333'
              },
              grid: {
                display: false
              }
            }
          },
          plugins: {
            legend: {
              display: true,
              position: 'top',
              labels: {
                color: '#333',
                font: {
                  size: 14,
                  family: "'Lato', sans-serif"
                }
              }
            },
            tooltip: {
              backgroundColor: '#333',
              titleFont: {
                family: "'Montserrat', sans-serif",
                weight: 'bold'
              },
              bodyFont: {
                family: "'Lato', sans-serif"
              }
            }
          }
        }
      });
    }
  }

  const chartMetricSelector = document.getElementById('chartMetricSelector');
  chartMetricSelector.addEventListener('change', (e) => {
    createOrUpdateChart(e.target.value);
  });

  createOrUpdateChart('dtes');

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  const year = document.getElementById('current-year')
  const currentYear = new Date().getFullYear()
  year.innerText = currentYear 
});