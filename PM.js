function Prime(max) {
    for (var counter = 2; counter <= max; counter++) {
        var notPrime = false;
        for (var i = 2; i <= counter; i++) {
            if (counter % i == 0 && i !== counter) {
                notPrime = true;
            }
        }
        if (notPrime === false) {
            console.log(counter);
        }
    }
}
Prime(100);
