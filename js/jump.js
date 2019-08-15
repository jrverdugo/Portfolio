document.querySelector("#head").addEventListener( 'click', function( e ) {
    document.querySelector("#header").scrollIntoView({
        behavior: 'smooth'
    });
    e.preventDefault();
});

document.querySelector("#proj").addEventListener( 'click', function( e ) {
    document.querySelector("#projects").scrollIntoView({
        behavior: 'smooth'
    });
    e.preventDefault();
});

document.querySelector("#con").addEventListener( 'click', function( e ) {
    document.querySelector("#contact").scrollIntoView({
        behavior: 'smooth'
    });
    e.preventDefault();
});
