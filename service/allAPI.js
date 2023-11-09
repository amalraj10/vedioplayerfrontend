

//upload video
const uploadVideo = async()=> {
    await commonAPI('POST',`${serverURL}/video`,reqBody)
}

uploadVideo =  async(reqBody)=>{
    await commonAPI('POST','${serverURL}/Videos',reqBody)
}