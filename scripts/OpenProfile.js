function openProfile(markerID) {
    var tempThis;
    var profileHeight = getProfileHeight(markerID);
    if (!profileHeight) {
        profileHeight = 200;
    }
    var profileLinkObject = $('<a class="iframe"  href="./profiles/profile_' + markerID + '.html"></a>');
    profileLinkObject.fancybox({
        width: 1300,
        height: profileHeight,
        autoScale: false
    });
    profileLinkObject.click();
}
