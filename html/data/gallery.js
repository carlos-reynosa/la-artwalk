define(function(){


  /**
 * The content of the infowindow for gallery
 * ['gallery name','address','phone number']
 */

  //['118 Winston ', '118 Winston Street 2nd Floor', 25, '50x50', 'title', 'content'],
  //['Art Walk Lounge ', '634 S. Spring St', 25, '50x50', 'title', 'content'],
  //['ART-E Gallery ', '216 S. Spring St', '323-902-5557', 25, '50x50', 'title', 'content'],
  //['Arty Gallery ', '634 South Main St', '310-467-7896', 25, '50x50', 'title', 'content'],
  //['Black & White Gallery ', '810 Spring St', '818-679-5891', 25, '50x50', 'title', 'content'],
  //['CB1 Gallery ', '207 W. 5th St', '213-806-7889', 25, '50x50', 'title', 'content'],
  //['CHRONOS Gallery ', '177 W. Olympic Blvd', 25, '50x50', 'title', 'content'],
  //['Dialect Gallery ', '215 W. 6th St. #111', '213-627-7599', 25, '50x50', 'title', 'content'],
  //['Drkrm Gallery ', '727 S. Spring St', '323-271-5635', 25, '50x50', 'title', 'content'],
  //['El Nopal Press ', '109 W. 5th St', '213-239-0417', 25, '50x50', 'title', 'content'],
  //['Fine Arts Building ', '811 W. 7th St', '213-689-8822', 25, '50x50', 'title', 'content'],
  //['GALLERY METAMORPHOSIS ', '334 S. Main St', '818-340-3610', 25, '50x50', 'title', 'content'],
  //['Gallery Mujo ', '548 S. Spring St', '909-573-3627', 25, '50x50', 'title', 'content'],
  //['Ground Floor Gallery ', '433 S. Spring St', '213-624-301', 25, '50x50', 'title', 'content'],
  //['Take My Picture ', '860 S. Broadway St', '213-622-2256', 25, '50x50', 'title', 'content'],
  //['Hatakeyama Gallery ', '905 S. Hill St', '213-293-8633', 25, '50x50', 'title', 'content'],
  //['Hold Up Art Gallery ', '358 E. 2nd St', '213-221-4585', 25, '50x50', 'title', 'content'],
  //['Jennifer Main Gallery', '620 S. Main Street #204', '702.586.3133', 25, '50x50', 'title', 'content'],
  //['LA ARTCORE ', '120 Judge John Aiso St', '213-617-3274', 25, '50x50', 'title', 'content'],
  //['LELA Terakoya', '333 Alameda St', '714-271-7646', 25, '50x50', 'title', 'content'],
  //['Lexander ', '215 W. 6th St. #113', '310-866-9431', 25, '50x50', 'title', 'content'],
  //['Los Angeles Center for Digital Art ', '102 W. 5th St', '213-624-6212', 25, '50x50', 'title', 'content'],
  //['MB Abram Galleries ', '525 West 7th St', '310-738-5235', 25, '50x50', 'title', 'content'],
  //['Miguel Osuna Art Studio ', '410 S. Spring St', '213-622-2256', 25, '50x50', 'title', 'content'],
  //['MOCA Grand Avenue ', '250 S. Grand Ave', '213-626-6222', 25, '50x50', 'title', 'content'],
  //['Morono Kiang Gallery ', '218 3rd St', '213-628-8208', 25, '50x50', 'title', 'content'],
  //['Norbertellen Gallery ', '215 W. 6th Street #110', '818-397-1215', 25, '50x50', 'title', 'content'],
  //['Phil Stern Gallery ', '601 S. Los Angeles St', '213-488-0138', 25, '50x50', 'title', 'content'],
  //['PYO Gallery LA ', '1100 S. Hope St. #105', '213-405-1488', 25, '50x50', 'title', 'content'],
  //['REDCAT Gallery ', '631 W. 2nd St', '213-237-2800', 25, '50x50', 'title', 'content'],
  //['Robert Reynolds ', '408 S. Spring St', '213-622-2256', 25, '50x50', 'title', 'content'],
  //['Spring Arts Tower ', '453 S Spring St', '213-623-4636', 25, '50x50', 'title', 'content'],
  //['Takeuchi Galleries ', '901 S. Broadway', '424-654-7338', 25, '50x50', 'title', 'content'],
  //['Temple of Visions ', '719 S. Spring St', '213-622-2256', 25, '50x50', 'title', 'content'],
  //['Terrell Moore Gallery ', '1221 S. Hope St', '213-744-1999', 25, '50x50', 'title', 'content'],
  //['The Annex ', '849 South Broadway', '805-217-2186', 25, '50x50', 'title', 'content'],
  //['The Cooper Gallery ', '860 Los Angeles St', '213-627-3754', 25, '50x50', 'title', 'content'],
  //['The Garden Gallery ', '215 W. 9th St', '213-622-2256', 25, '50x50', 'title', 'content'],
  //['The Hive Gallery ', '729 S. Spring St', '213-955-9051', 25, '50x50', 'title', 'content'],
  //['The Latino Museum ', '514 S. Spring St', '213-626-7600', 25, '50x50', 'title', 'content'],
  //['The Local Tourist Spot ', '450 Main St', '213-622-2256', 25, '50x50', 'title', 'content'],
  //['Downtown Art Center Gallery ', '828 S. Main St', '213-627-7374 ', 25, '50x50', 'title', 'content'],
/**
 * Data for the markers consisting of a name, a LatLng and a zIndex for
 * the order in which these markers should display on top of each
 * other.
 */
 // Add gallery markers to the map
var galleries = [
  ['118 Winston ', 34.046991,-118.247305, 43, 25, '59x59', '118 Winston Gallery', '118 Winston Street 2nd Floor'],
  ['Art Walk Lounge ', 34.045082,-118.251681, 44, 25, '50x50', 'Art Walk Lounge', '634 S. Spring Street'],
  ['ARTE Gallery ', 34.051234,-118.245882, 45, 25, '57x57', 'ARTE gallery', '216 South Spring St 323-902-5557'],
  ['Arty Gallery', 34.044487, -118.250737, 30, 25, '52x52', 'Arty Gallery', '634 South Main Street 310-467-7896'],
  ['Black & White Gallery', 34.042760,-118.253591, 12, 25, '67x67', 'Black & White Gallery', '810 Spring Lower Level St 818- 679-5891'],
  ['CB1 Gallery', 34.047694, -118.249919, 68, 25, '65x65', 'CB1 Gallery', '207 West 5th Street 213-806-7889'],
  ['CHRONOS Gallery', 34.040664, -118.257045, 2, 25, '59x59', 'CHRONOS Gallery', '177 W. Olympic Blvd'],
  ['Dialect', 34.046268,-118.251410, 31, 25, '60x60', 'Dialect gallery', '215 W. 6th St. #111 213-627-7599'],
  ['Drkrm Gallery', 34.0439,-118.252998, 11, 25, '85x85', 'Drkrm Gallery', '727 South Spring St 323-271-5635'],
  ['El Nopal Press', 34.04685, -118.248738, 12, 25, '54x54', 'El Nopal Press Gallery', '109 W. 5th Street 213-239-0417'],
  ['Fine Arts Building', 34.048866, -118.259029, 14, 25, '72x72', 'Fine Arts Building Gallery', '811 West 7th Street 213-689-8822'],
  ['Gallery Metamorphosis ', 34.048144, -118.246493, 15, 25, '81x81', 'Gallery Metamorphosis', '334s. Main Street 818-340-3610'],
  ['Gallery Mujo', 34.045952, -118.250472, 16, 25, '66x66', 'Gallery Mujo', '548 S. Spring Street 909-573-3627'],
  ['Take My Picture', 34.042358,-118.255812, 17, 25, '80x80', 'Take My Picture', '860 S. Broadway 213-622-2256'],
  ['Ground Floor Gallery', 34.048347, -118.249225, 31, 25, '81x81', 'Ground Floor Gallery', '433 S. Spring Street 213-624-3010'],
  ['Hatakeyama Gallery', 34.042791,-118.25735, 18, 25, '71x71', 'Hatakeyama Gallery', '905 S. Hill Street 213-293-8633'],
  ['Hold Up Art Gallery ', 34.048834,-118.241044, 19, 25, '87x87', 'Hold Up Art Gallery', '358 E. 2nd Street 213-221-4585'],
  ['Jennifer Main Gallery', 34.044588,-118.250452, 20, 25, '84x84', 'Jennifer Main Gallery', '620 S. Main Street #204 702-586-3133'],
  ['LA ARTCORE ', 34.050988,-118.239927, 21, 25, '77x77', 'LA ARTCORE Gallery', '120 Judge John Aiso 213-617-3274'],
  ['LELA Terakoya ', 34.050729,-118.238077, 22, 25, '74x74', 'LELA Terakoya', '333 Alameda Street 714-271-7646'],
  ['Lexander', 34.046217,-118.251477, 30, 25, '84x84', 'Lexander Gallery', '215 W. 6th St. #113 310-866-9431'],
  ['Los Angeles Center for Digital Art', 34.046544, -118.250612, 23, 25, '70x70', 'Los Angeles Center for Digital Art', '102 W. 5th Street 213-624-6212'],
  ['MB Abram Galleries ', 34.047207,-118.256186, 24, 25, '69x69', 'MB Abram Gallery', '525 West 7th Street 310-738-5235'],
  ['Miguel Osuna Art Studio', 34.048366, -118.248126, 68, 25, '76x76', 'Miguel Osuna Art Studio', '410 S. Spring Street'],
  ['MOCA Grand Avenue', 34.05344, -118.250662, 26, 25, '67x67', 'MOCA Grand Avenue', '250 S. Grand Ave 213-626-6222'],
  ['Morono Kiang Gallery ', 34.050591, -118.247619, 27, 25, '77x77', 'Morono Kiang Gallery', '218 3rd Street 213-628-8208'],
  ['Norbertellen Gallery ', 34.046310,-118.251372, 32, 25, '59x59', 'Norbertellen Gallery', '215 W. 6th Street #110 818-397-1215'],
  ['Phil Stern Gallery ', 34.044596,-118.249031, 68, 25, '88x88', 'Phil Stern Gallery', '601 S. Los Angeles St 213-488-0138'],
  ['PYO Gallery LA ', 34.041684,-118.263076, 31, 25, '97x97', 'PYO Gallery LA', '1100 S. Hope Street 213-405-1488'],
  ['REDCAT Gallery ', 34.055148,-118.25071, 33, 25, '66x66', 'REDCAT gallery', '631 W. 2nd Street 213-237-2800'],
  ['Robert Reynolds ', 34.04869,-118.248328, 69, 25, '60x60', 'Robert Reynolds', '408 S. Spring Street'],
  ['Spring Arts Tower', 34.047833,-118.249409, 28, 25, '89x89', 'Spring Arts Tower', '453 S Spring Street 213-623-4636'],
  ['Takeuchi Galleries ', 34.042352, -118.256539, 39, 25, '63x63', 'Takeuchi Galleries', '901 South Broadway 424-654-7338'],
  ['Temple of Visions ', 34.044037,-118.252931, 35, 25, '92x92', 'Temple of Visions', '719 S. Spring Street'],
  ['Terrell Moore Gallery ', 34.040431, -118.264934, 36, 25, '64x64', 'Terrell Moore Gallery', '1221 S. Hope Street 213-744-1999'],
  ['The Annex  ', 34.042765, -118.256063, 37, 25, '71x71', 'The Annex Gallery', '849 South Broadway 805-217-2186'],
  ['The Cooper Gallery ', 34.040943, -118.253658, 38, 25, '74x74', 'The Cooper Gallery', '860 Los Angeles St 213-627-3754'],
  ['The Garden Gallery ', 34.042514,-118.25635, 34, 25, '66x66', 'The Garden Gallery', '215 W. 9th Street'],
  ['The Hive Gallery ', 34.043938,-118.253087, 40, 25, '65x65', 'The Hive Gallery', '729 S. Spring Street 213-955-9051'],
  ['The Latino Museum  ', 34.046907,-118.249851, 41, 25, '67x67', 'The Latino Museum', '514 S. Spring Street 213-626-7600'],
  ['The Local Tourist Spot  ', 34.047057,-118.248034, 41, 25, '78x78', 'The Local Tourist Spot', '450 Main Street'],
  ['Downtown Art Center Gallery', 34.042117,-118.253911, 10, 25, '86x86', 'Downtown Art Center Gallery', '828 S. Main Street 213-627-7374 ']


  //['Ground Floor Gallery', 34.048347, -118.249225, 16, 25, '50x50', 'title', 'content'],
  //['FIDM Museum', 34.044197,-118.259668, 13, 25, '50x50', 'title', 'content'],
  //['Diego Cardoso Gallery', 34.042048,-118.251207, 9, 25, '50x50', 'title', 'content'],
  //['Clarks Gallery', 34.048273, -118.255693, 1, 25, '50x50', 'title', 'content'],
  //['Crack Gallery', 34.046043,-118.251266, 6, 25, '50x50', 'title', 'content'],
  //['Crewest Gallery', 34.047167,-118.247457, 7, 25, '50x50', 'title', 'content'],
  //['White Gloss ', 34.048347,-118.249225, 42, 25, '50x50', 'title', 'content'],


];
return galleries
});
