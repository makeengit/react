
// $("#click").click( ()=>{
    // $(".box").slideToggl(2000)
//     $(".top").animate({width:100},4000)
// })

// $("#stop").click( ()=>{

//     $(".top").stop()
// })

// $.get({
//     url:"https://jsonplaceholder.typicode.com/users",
//     success:function(res){
//         let text=""
//         for(let i = 0; i<res.length; i++){
//             text += `<li> ${res[i].name}</li>`
//         } $
//         console.log(res)
//     },

//     error:function(res){
//         console.log(res)
//     }
// })

$("#click").click(()=>{
    let username = $("#username").val()
    let urlapi = "https://api.github.com/users/"+username

    $.get({
        url:urlapi,
        success:function(res){
            console.log(res)
            $("#div").html()
            text += `<p> ${res}</p>`
            console.log(res.avatar_url)
            $("#div").append(res);
        }
        
    })
})