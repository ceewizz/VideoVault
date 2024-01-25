// Logging user out
const logout = async () => {
    const response = await fetch("/api/users/logout" , {
        method: "POST",
        headers: { "Content-Type": "application/json"},


    });

    if (response.ok) {
        document.location.replace("/");
    }
    else {
        alert(respoonse.statusText);
    }
    };

    // Event listener
    document.querySelector("#logout").addEventListener("click", logout);
