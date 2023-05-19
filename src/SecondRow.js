import Card from './Card'
function SecondRow() {
    return(
        <>
        <div className="container-fluid">
           <div className="row justify-content-center CardRow">
           <div className="col-11">
            {/* <div className="row">
            <div className="col-md-6 col-12 mt-4" >
                  <div className=''>
                      <Card
                         imgsrc= 'https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/cards/v2.1/enjoyOnTv/en.png'
                         heading= 'Enjoy on your TV'
                         para='Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.'
                       />
                  </div>
               </div>

              <div className="col-md-6 col-12 mt-4">
                    <div className=''>
                        <Card
                         imgsrc= 'https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/cards/v2.1/watchEverywhere/en.png'
                         heading= 'Watch everywhere'
                          para='Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.'
                       />
                   </div>            
              </div>
            </div> */}
          
           <div className="row ">
              <div className='col-md-6 col-12  mt-3'>
                  <div className=''>
                       <Card
                          imgsrc = 'https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/cards/v2.1/kids/en-GB.png'
                         heading = 'Create profiles for kids'
                         para = 'Send children on adventures with their favourite characters in a space made just for them—free with your membership.'
                        />
                   </div>
               </div>
              <div className='col-md-6 col-12 mt-3'>
                  <div className=''>
                       <Card
                         imgsrc = 'https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/cards/v2.1/download/en.png'
                         heading = 'Download your shows to watch offline'
                         para = 'Save your favourites easily and always have something to watch.'
                       />
                   </div>                  
               </div>
          </div>
          </div>

       </div>
   </div>
        </>
    )
}
export default SecondRow;