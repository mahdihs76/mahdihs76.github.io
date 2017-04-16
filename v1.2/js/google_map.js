function initMap() {
                            // Computer Department of Sharif Uni :)
                            var myLatLng = {lat: 35.702506, lng: 51.351158};

                            var map = new google.maps.Map(document.getElementById('map'), {
                              zoom: 16,
                              center: myLatLng
                            });

                            var marker = new google.maps.Marker({
                              position: myLatLng,
                              map: map,
                              title: 'We are WebCheese'
                            });
                          }
