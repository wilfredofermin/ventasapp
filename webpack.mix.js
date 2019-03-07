const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.styles([
	// <!-- Bootstrap CSS -->   
    'resources/css/bootstrap.min.css',
    // <!-- bootstrap theme -->
    'resources/css/bootstrap-theme.css',
    // <!--external css-->
    // <!-- font icon -->
    'resources/css/elegant-icons-style.css',
    'resources/css/font-awesome.css',
    // <!-- full calendar css-->
    'resources/assets/fullcalendar/fullcalendar/bootstrap-fullcalendar.css',
    'resources/assets/assets/fullcalendar/fullcalendar/fullcalendar.css',
    // <!-- easy pie chart-->
    'resources/assets/jquery-easy-pie-chart/jquery.easy-pie-chart.css',
    // <!-- owl carousel -->
    'resources/css/owl.carousel.css',
    'resources/css/jquery-jvectormap-1.2.2.css',
    // <!-- Custom styles -->
	'resources/css/fullcalendar.css',
	 'resources/css/widgets.css',
	'resources/css/style.css',
	'resources/css/style-responsive.css',
	'resources/css/xcharts.min.css',
    'resources/css/jquery-ui-1.10.4.min.css',
    'resources/css/line-icons.css'
      
], 'public/css/all.css')
	.scripts([
		// <!-- javascripts -->
		'resources/js/jquery.js',
		'resources/js/jquery-ui-1.10.4.min.js',
		// 'resources/js/jquery-1.8.3.min.js',
		'resources/js/jquery-ui-1.9.2.custom.min.js',
		 // <!-- bootstrap -->
		'resources/js/bootstrap.min.js',
		// <!-- nice scroll -->
		'resources/js/jquery.scrollTo.min.js',
		'resources/js/jquery.nicescroll.js',
		// <!-- charts scripts -->
		'resources/assets/jquery-knob/js/jquery.knob.js',
		'resources/js/jquery.sparkline.js',
		'resources/assets/jquery-easy-pie-chart/jquery.easy-pie-chart.js',
		'resources/js/owl.carousel.js',
		 // <!-- jQuery full calendar -->
		'resources/js/fullcalendar.min.js',
		'resources/assets/fullcalendar/fullcalendar/fullcalendar.js',
		// <!--script for this page only-->
		'resources/js/calendar-custom.js',
		'resources/js/jquery.rateit.min.js',
		 // <!-- custom select -->
		// 'resources/js/jquery.customSelect.min.js',
		'resources/assets/chart-master/Chart.js',

		// <!--custome script for all page-->
		'resources/js/scripts.js',
		// <!-- custom script for this page-->
		'resources/js/sparkline-chart.js',
		'resources/js/easy-pie-chart.js',
		'resources/js/jquery-jvectormap-1.2.2.min.js',
		'resources/js/jquery-jvectormap-world-mill-en.js',
		'resources/js/xcharts.min.js',
		'resources/js/jquery.autosize.min.js"',
		'resources/js/jquery.placeholder.min.js',
		'resources/js/gdp-data.js',
		'resources/js/morris.min.js',
		'resources/js/sparklines.js',
		'resources/js/charts.js',
		'resources/js/jquery.slimscroll.min.js'	

	],'public/js/all.js')
	.js('resources/js/app.js','public/js/app.js');
