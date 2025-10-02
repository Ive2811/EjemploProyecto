        // Efectos simples al cargar la página
        document.addEventListener('DOMContentLoaded', function() {
            console.log('Página cargada correctamente');
            
            // Agregar efectos hover a las tarjetas
            const cards = document.querySelectorAll('.card');
            
            cards.forEach(function(card) {
                card.addEventListener('mouseenter', function() {
                    this.style.transform = 'translateY(-10px) scale(1.02)';
                });
                
                card.addEventListener('mouseleave', function() {
                    this.style.transform = 'translateY(0) scale(1)';
                });
            });
        });