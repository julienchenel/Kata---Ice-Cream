        // Quand le document HTML est entièrement chargé

        $(document).ready(function() {

            var i = 0;

            // Au clic sur "Valider"... 

            $("#choixParfum").click(function() {

                // Récupération de la valeur du  "Select"

                var parfum = $('#parfum').val();

                // Incrémentation de i...

                i++;

                // Récupération des éléments HTML de la première boule

                var imageSvg = $("#boule1").html();

                // Injection le code HTML (Image SVG) dans la boule suivante

                $('#boule' + i).html(imageSvg);

                $('#boule' + i)

                // J'attribue une classe pour animer la boule

                .addClass("animated jello")

                // J'attribue la couleur définie dans le "Select"  à la boule

                .css({
                    'fill': parfum
                });

                // Je joue un son à chaque click

                var audio = new Audio("498.wav");
                audio.play();
            });

            // Suppression de la dernière boule ajoutée

            $("#supprimer").click(function() {

                $('#boule' + i).remove();
                i--;

                console.log(i)
            });

        });