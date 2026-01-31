// Dashboard Chart Initialization
document.addEventListener('DOMContentLoaded', () => {
    const ctx = document.getElementById('revenueChart');

    if (ctx) {
        new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                datasets: [{
                    label: 'Fee Collection ($)',
                    data: [32000, 35000, 31000, 42000, 38000, 42500],
                    borderColor: '#6366f1',
                    backgroundColor: 'rgba(99, 102, 241, 0.1)',
                    fill: true,
                    tension: 0.4,
                    borderWidth: 3,
                    pointBackgroundColor: '#6366f1'
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        grid: {
                            color: '#f0f0f0'
                        }
                    },
                    x: {
                        grid: {
                            display: false
                        }
                    }
                }
            }
        });
    }
});

// Sidebar active state logic
const currentPath = window.location.pathname.split('/').pop() || 'index.html';
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
    if (link.getAttribute('href') === currentPath) {
        link.classList.add('active');
    } else {
        link.classList.remove('active');
    }
});

// Student Management Logic
function editStudent(id) {
    alert(`Editing student profile: ${id}\n(This would typically open an edit form)`);
}

function deleteStudent(id) {
    if (confirm(`Are you sure you want to delete student ${id}?`)) {
        alert(`Student ${id} has been removed from the directory.`);
        // Logic to remove the row would go here
    }
}

// Filtering and Search Logic
document.addEventListener('DOMContentLoaded', () => {
    const filterBtn = document.getElementById('filterBtn');
    const classFilter = document.getElementById('classFilter');
    const globalSearch = document.getElementById('globalSearch');
    const tableBody = document.getElementById('studentTableBody');

    if (filterBtn && tableBody) {
        filterBtn.addEventListener('click', () => {
            const selectedClass = classFilter.value.toLowerCase();
            const rows = tableBody.getElementsByTagName('tr');

            for (let row of rows) {
                const classCell = row.getElementsByTagName('td')[2].textContent.toLowerCase();
                if (selectedClass === 'all' || classCell.includes(selectedClass)) {
                    row.style.display = '';
                } else {
                    row.style.display = 'none';
                }
            }
        });
    }

    if (globalSearch && tableBody) {
        globalSearch.addEventListener('input', () => {
            const searchTerm = globalSearch.value.toLowerCase();
            const rows = tableBody.getElementsByTagName('tr');

            for (let row of rows) {
                const text = row.textContent.toLowerCase();
                row.style.display = text.includes(searchTerm) ? '' : 'none';
            }
        });
    }
});
