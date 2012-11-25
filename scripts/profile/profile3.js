// +--------------------------------------------------------------------+ \\
// ¦ Raphaël 2.1.0 - JavaScript Vector Library                          ¦ \\
// +--------------------------------------------------------------------¦ \\
// ¦ Copyright © 2008-2012 Dmitry Baranovskiy (http://raphaeljs.com)    ¦ \\
// ¦ Copyright © 2008-2012 Sencha Labs (http://sencha.com)              ¦ \\
// +--------------------------------------------------------------------¦ \\
// ¦ Licensed under the MIT (http://raphaeljs.com/license.html) license.¦ \\
// +--------------------------------------------------------------------+ \\

// +--------------------------------------------------------------------+ \\
// ¦ Raphaël 2.1.0 - JavaScript Vector Library                          ¦ \\
// +--------------------------------------------------------------------¦ \\
// ¦ Copyright © 2008-2012 Dmitry Baranovskiy (http://raphaeljs.com)    ¦ \\
// ¦ Copyright © 2008-2012 Sencha Labs (http://sencha.com)              ¦ \\
// +--------------------------------------------------------------------¦ \\
// ¦ Licensed under the MIT (http://raphaeljs.com/license.html) license.¦ \\
// +--------------------------------------------------------------------+ \\


var colors = ['#EE3E92', '#084A74', '#00B3C0', '#AAD039'];

function draw_graphique(container, title, textes, results)
                {
                      var r = Raphael(container, 300, 300),
                                rad = 78,
                                defaultText = title,
                                speed = 250;

                        r.circle(150, 150, 85).attr({ stroke: 'none', fill: '#fff' });

                        var title = r.text(150, 150, defaultText).attr({
                                font: '11px "Museo slab"',
                                fill: '#084A74'
                        }).toFront();
                        //cx + r * Math.cos(-endAngle * rad)
                        r.customAttributes.arc = function(value, color, rad, start, end) {
                                var rr = Math.PI/180;
                                var v = value,
                                        alpha = v == 360 ? 359.99 : v,
                                        random = start,
                                        a = (random-alpha) * Math.PI/180,
                                        b = random * Math.PI/180,
                                        sx = 150 + rad * Math.cos(-start * rr),
                                        sy = 150 - rad * Math.sin(-start * rr),
                                        x = 150 + rad * Math.cos(-end * rr),
                                        y = 150 - rad * Math.sin(-end * rr),
                                        path = [['M', sx, sy], ['A', rad, rad, 0, +(end - start > 180), 1, x, y]];
                                return { path: path, stroke: color }
                        }

                        var max = results[0];
                        var len = results.length;
                        var total = 0;
                        for (var i = 0; i < len; i++)
                        {
                                if (results[i] > max) {
                                        max = results[i];
                                }
                                total += results[i];
                        }
                        var start = 270;

                        /* On parcourt les résultats pour afficher le graphique */
                        $.each(results, function(index, v) {
                                var size = parseInt(v * 99.9 / max - 1);
                                var     end = 360 * v / total;

                                var color = colors[index],
                                        value = size,
                                        text = textes[index];

                                var z = r.path().attr({ arc: [value, color, rad, start, start + end], 'stroke-width':22 });

                                start += end;


                                z.mouseover(function()
                                {
                                        this.animate({ 'stroke-width': 42, opacity: 1 }, 1000, 'elastic');
                                        if(Raphael.type != 'VML') //solves IE problem
                                                this.toFront();

                                        title.stop().animate({ opacity: 0 }, speed, '>', function(){
                                                this.attr({ text: text + '\n' + v + '%' }).animate({ opacity: 1 }, speed, '<');
                                        });
                                }).mouseout(function(){
                                        this.stop().animate({ 'stroke-width': 22, opacity: 1 }, speed*4, 'elastic');
                                        title.stop().animate({ opacity: 0 }, speed, '>', function(){
                                                title.attr({ text: defaultText }).animate({ opacity: 1 }, speed, '<');
                                        });
                                });
                        });
                }

                window.onload = function () {
                        /* On crée le graphique */
                        var results = [100,0.01];
                        var textes = ['Painting', 'Video', 'Texte 3', 'Texte 4']
						
                        draw_graphique('holder', 'Remboursements', textes, results)

                        $('#holder svg path').eq(0).hover(function(){
                          $('#artworks_container li').css('opacity', 1);
                          $('#artworks_container li').not('.painting').css( "outline", "3px solid #00BCC0");
                          $('#artworks_container li').filter('.painting').css( "outline", "3px solid #00BCC0");
                        }, function(){
                          $('#artworks_container li').css({opacity: 1, outline: 0});

                        });
						
						
                        var results = [83, 17];
                        var textes2 = ['Abstract', 'Representational'];
                        draw_graphique('holder2', 'Contemporary', textes2, results);

                        $('#holder2 svg path').eq(0).hover(function(){
                          $('#artworks_container li').css('opacity', 1);
                          $('#artworks_container li').not('.abstract').css('opacity', 0.2);
                          $('#artworks_container li').filter('.abstract').css( "outline", "3px solid #00BCC0");
                        }, function(){
                          $('#artworks_container li').css({opacity: 1, outline: 0});
                        });
                          $('#holder2 svg path').eq(1).hover(function(){
                          $('#artworks_container li').css('opacity', 1);
                          $('#artworks_container li').not('.representational').css('opacity', 0.2);
                          $('#artworks_container li').filter('.representational').css( "outline", "3px solid #00BCC0");
                        }, function(){
                          $('#artworks_container li').css({opacity: 1, outline: 0});
                        });
                          


                        var results = [100,0.01];
                        var textes3 = ['under $10,000', '$50,000-$100,000', 'Texte 33', 'Texte 34'];
                        draw_graphique('holder3', 'Remboursements', textes3, results);
                        $('#holder3 svg path').eq(0).hover(function(){
                          $('#artworks_container li').css('opacity', 1);
                          $('#artworks_container li').not('.beginner').css( "outline", "3px solid #00BCC0");
                          $('#artworks_container li').filter('.beginner').css( "outline", "3px solid #00BCC0");
                        }, function(){
                          $('#artworks_container li').css({opacity: 1, outline: 0});
                        });
						
						
						var results = [100,0.01];
                        var textes4 = ['Len Aaron ', 'Deborah Grant', 'Botner&Pedro', 'Texte 34'];
                        draw_graphique('holder4', 'Remboursements', textes4, results);
                        $('#holder4 svg path').eq(0).hover(function(){
                          $('#artworks_container li').css('opacity', 1);
                          $('#artworks_container li').not('.LenAaron').css( "outline", "3px solid #00BCC0");
                          $('#artworks_container li').filter('.LenAaron').css( "outline", "3px solid #00BCC0");
                        }, function(){
                          $('#artworks_container li').css({opacity: 1, outline: 0});
                        });
                         
                };
