import React from 'react'

const Profile = () => {
    return (
        <div class="container mt-4 mb-4 p-3 d-flex justify-content-center">
            <div class="card p-4">
                <div class=" image d-flex flex-column justify-content-center align-items-center"> <button class="btn btn-secondary"> <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" height="100" width="100" /></button> <h4 class="name mt-3">Username : {localStorage.getItem("name")}</h4>
                    <h6 class="name mt-3">email: {localStorage.getItem("email")}</h6>
                    <h6 class="name mt-3">Mo. No.: {localStorage.getItem("phone")}</h6>
                </div>
            </div>
        </div>
    )
}

export default Profile