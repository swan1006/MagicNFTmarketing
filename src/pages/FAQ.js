import React from 'react';
import Card from '../assets/img/greeting_card.jpg';

const FAQ = () => {
    return <React.Fragment>
        <h3 className='text-left mt-5'><b className='purple'>HOW TO CONNECT TO THIS SITE:</b></h3>
        <p>-Each user will be able to connect to the website with their wallet: Ayramask, Metamask, Truswallet, Wallet Connect 
and the necessary compatible wallet mechanisms that you know.</p>
        <p>**AYRAMASK ONLY YOU MUST PUT: “COMING SOON”, BECAUSE IT IS NOT DONE YET.</p>
        <p>-At the top OF WEBSITE, users will see their personal WALLET balance in these three tokens in Binance Smart Chain 
Network:</p>
        <p><b>AYRA BSC, ITHD ,BNB and MATIC.</b></p><br /><br />


        <p>-In the name of the balance you must put a link with the target blanck attribute to the page of the token in question.</p>
        <p>-That is, Ayra`s name will lead to Ayra`s website (ayratokens.com).</p>
        <p>-ITHD`s name will lead to the ITHD website (ithdiamond.tk).</p><br /><br />


        <p>-Here you are the token contracts because you will need to interact with the Ayra and ITHD contracts to do what I want the website to do.</p>
        <p><b>-CONTRACT (MAINET) AYRA BSC:</b><a href="https://bscscan.com/token/0xe976e9cc54817074922eb5426f2be74cd2883f17">https://bscscan.com/token/0xe976e9cc54817074922eb5426f2be74cd2883f17</a> WEBSITE: <a href="https://www.ayratokens.com/">https://www.ayratokens.com/</a></p>
        <p><b>-CONTRACT (MAINET) AYRA BSC:</b><a href="https://bscscan.com/token/0xe976e9cc54817074922eb5426f2be74cd2883f17">https://bscscan.com/token/0xe976e9cc54817074922eb5426f2be74cd2883f17</a> WEBSITE: <a href="https://www.ayratokens.com/">https://www.ayratokens.com/</a></p><br /><br />


        <p><b className='purple'>WHAT WILL BE SEEN ON THE HOMEPAGE</b></p><br /><br />
        <p>-On the home page there will be a series of predesigned gift card templates.</p>
        <p>- The menu should have a category for `All NFTs` and then a category for each type of greeting card that exists. Don`t forget this part because this NFT site not only allows you to upload conventional NFTS, but also allows you to upload Greeting Cards.</p>
        <img src={ Card } alt='' />
        <p>-We refer to the typical card that people give away for a wedding, birthday, Valentine`s Day, Christmas, etc., that is, a kind of dedication.</p>
        <p>The user sees pre-designs of cards but will be able to customize the color of the card (the cover), change the images pasted into images that the user wishes to upload or use images that are on the website. (Stickers, etc).</p>

        <p><b className='purple'>HOW CAN THE USER PERSONALIZE THE GREETING CARDS?</b></p>
        <p className='red'>Then the user can personalize GREETING CARDS.</p>
        <p><b className='red'>Step 1)</b> USERS CAN Customize cover</p>
        <p><b className='red'>Step 2)</b> USERS CAN Write a text of a maximum of 5 lines.</p>
        <p><b className='red'>Step 3)</b> USERS CAN Write THEIR names or upload jpeg or png of your signature.</p><br /><br />
        <p><b className='purple'>WHEN PRESSING CREATE NFT, WHICH TWO OPTIONS DOES THE USER HAVE?</b></p>
        <p className='text-primary'>OPTION 1) UPLOAD YOUR OWN NFT DESIGN THAT THE USER ALREADY HAS ON THEIR DEVICE.</p>
        <p>*THE FOLLOWING FORMATS MUST BE SUPPORTED:</p>
        <p>JPG, JPEG, PNG, GIF, WEBP, MP4 (FOR 3D MODEL).</p>
        <p>-At the time of uploading the NFT the user will be able to optionally choose whether to use a HASTAG or not in their NFT.</p>
        <p>-IMPORTANT: To avoid too high network fees you must make two separate contracts to mint the NFT:</p>
        <p>*A minted contract for NFT `No hastag``.</p>
        <p>*A minted contract for NFT `With hastag`.</p>
        <p><b className='purple'>ABOUT HASTAG:</b></p>
        <p>-After fully designing the NFT, the user can optionally choose a maximum 4 word hastag. The user will only be able to select the maximum 4 word hastag that is available. That is, optionally, the user will be able to sign their NFTs in a visible way.</p>
        <p>-There must be an automatic software or pre-created list so that each Hastag is truly unique.</p><br />
        <p>-The hastag will not be an image or video. The hastag should be like the Hastag of social networks.</p><br />
        <p>-It may be necessary to mint the hastag in a separate contract so that it remains in a special area of the NFT title or in a highly visible area such as a stamp that gives the NFT more value.</p><br />
        <p>-The NFTs with signature of authenticity hastag will be more quoted in the market, therefore, to be able to place a hastag in the NFT costs $1 more (in BNB, AYRA or ITHD).</p><br /><br />
        <p><b className='purple'>WHAT MAKE SPECIAL OUR NFTS- VERY IMPORTANT</b></p>
        <p>Our NTFS are special. The user can optionally upload a NFT in a conventional way (1 single side), but they can also choose to Write a dedication or place what they want (another image) on the second page. Think of the typical greeting card on the market.</p><br />
        <p>*As you know, greeting cards have a cover and can be opened like a book.</p><br />
        <p>*ALSO USER CAN SLECT A UNIQUE MAX 4 WORDS HASTAG TO MAKE IT MORE SPECIAL.</p><br />
        <p><b>IMPORTANT! Therefore, the user, at the time of uploading their NFT, designed within the site, or uploaded from their device, in any case, may upload an image on the front and another on the back, optionally.</b></p>
        <br /><br />

        <h1 className='purple'>CREATE NFT STEP BY STEP:</h1>
        <p>-First user push “CREATE NFT”. 2 OPTIONS APPEAR:</p>
        <p>*YOUR SELF (UPLOAD FROM DEVICE), OR DESING NOW (USE OUR OWN EDITOR ).</p>
        <p>- Both options eventually lead equally to the Create NFT preliminary form. The difference is that if the user is going to upload his NFT he does it in that same form, but if the user has designed his NFT within our editor, then that image created in the editor will take him to the create nft form with the image already uploaded to IPFS.</p>
        <p><b>IMPORTANT! It should be clear that our own image editor will not allow you to download the image created inside. Because otherwise people would use our editor to make images and then upload them to other NFTS markets.</b></p>
        <p>In step 1, the user sees the closed gift card, and can customize the cover, as we have said before.</p>
        <p>In step 2, the user views the open gift card, and that is where they can write their personalized text.</p>
        <p className='text-primary'>When the user has finished customizing their card, the next step is to CREATE.</p>
        <p className='text-primary'>By means of a button: CREATE NFT</p>
        <h3><b className='green'>CREATE NFT SMART CONTRACT----2 OptionsUSER WILL HAVE TO DECIDE: HASTAG OR NOT HASTAG….AND AFTER DECIDE IT WILL MUST DECIDE IF HE/SHE WANT SEND IT AS A GIFT.</b></h3>
        <p>-USER CAN CREATE 1, 5, 10 OR 20 COPIES OF A NFT.</p>
        <p>- At the time of creating the NFT he will have to choose between 3 options when calling it:</p>
        <p>-1) On the one hand you can decide to mint it to give it away (transfer it to another wallet). In this case, no price is established because it is the person who receives the gift who decides the sale price of said NFT.</p>
        <p>-2) On the other hand you can decide to put it up for sale directly. In this case, the website, before carrying out the mining of the NFT, forces the user to choose a sale price and for which currency they wish to sell it.</p>
        <p>-3) The user wants to have the nft in his wallet to decide later what to do with it. In this case, it is simply minted, without putting it up for sale or giving it away. In this way the user can later put it up for sale or give it away.</p>
        <h3><b className='green'>HOW MANY CONFIRMATIONS ARE NEEDED TO CREATE AN NFT?</b></h3>
        <h4>Our site must work in this sense, like Rarible, so that the web forces the user to choose one of the 3 options when creating the NFT.</h4>
        <h4>1) MINT + PUT IT ON SALE</h4>
        <h4>2)MINT+ GIVE IT A GIFT</h4>
        <h4>3)MINT + STORE IT IN THE WALLET</h4>
        <h4>Whatever the option chosen, in 1 single step and only one commission must carry out the process. The web must carry out the approval for free and then carry out the confirmation in the blockchain.</h4><br />
        <h4>The commission of the smart chain network must NEVER exceed $2. Therefore, the code must be optimized or the contracts separated so that only the necessary lines of code are executed according to the option that the user has chosen.</h4><br />
        <h4>For example, if the user decides to NFT without Hastag, it makes no sense to charge him a fee for executing a contract that contains the Hastag functions. So if there are several mint nft contracts to be made, they are made.</h4><br />
        <h4 className='purple mb-0'>IF A USER DECIDES TO MAKE CHANGES IN THE PRICE, ROYALTIES…ETC?</h4>
        <span className='purple' style={{ fontSize: '12px' }}>* LOGICALLY, IF THE NFT HAS ALREADY BEEN SOLD, IT CANNOT BE EDITED BECAUSE IT WILL NO LONGER BE IN YOUR PROPERTY.</span>
        <h4>There should be an `EDIT`` section on the web. So that within there the user can change all the parameters he wants of the NFT, that is if paying a Smart Chain network commission.</h4>
        <h4>The user may change the price or change his mind and give it away instead of selling it. You can change the title and description. The image cannot be changed.</h4>
        <h4>Once the changes have been made when editing the NFT, only a network commission will be paid.</h4>
        <h4>Internally, you will have to burn the old NFT and generate this new one with these new parameters.</h4>
        <h3><b className='purple'>HOW DOES THE USER PAY THE MINT OF THE NFT?</b></h3><br />
        <p><b>The client may pay with BNB, AYRA or ITHD.</b></p>
        <p><b className='purple'>MINT PRICES – WHAT WE WIN EACH MINT + NETWORK FEE</b></p>
        <br /><br />

        <h1 className='purple'>PRICES FOR 1 UNIT NFT:</h1>
        <h5 className='purple'>BINANCE SMART CHAIN BNB PRICE</h5>
        <h5>BNB PRICE: <span className='red'>0,0013 BNB</span> WITHOUT HASTAG + NETWORK FEE</h5>
        <h5>BNB PRICE: <span className='red'>0,0024 BNB</span> WITH HASTAG + NETWORK FEE</h5><br />
        <h5 className='purple'>BINANCE SMART CHAIN AYRA PRICE</h5>
        <h5>AYRA PRICE: <span className='green'>20 AYRA</span> WITHOUT HASTAG + NETWORK FEE</h5>
        <h5>AYRA PRICE: <span className='green'>40 AYRA</span> WITH HASTAG + NETWORK FEE</h5><br />
        <h5 className='purple'>BINANCE SMART CHAIN ITHD PRICE</h5>
        <h5>ITHD PRICE: <span className='yellow'>10 ITHD</span> WITHOUT HASTAG + NETWORK FEE</h5>
        <h5>ITHD PRICE: <span className='yellow'>20 ITHD</span> WITH HASTAG + NETWORK FEE</h5><br />
        <h5 className='purple'>POLYGON NETWORK (when user uses Polygon network to mint NFTS)</h5>
        <h5>MATIC PRICE 1 COPY: <span className='red'>0,36 MATIC</span> WITHOUT HASTAG + NETWORK FEE</h5>
        <h5>MATIC PRICE 1 COPY: <span className='red'>0,73 MATIC</span> WITH HASTAG + NETWORK FEE</h5><br />
        <br /><br />

        <h1 className='purple'>PRICES FOR MULTIPLE COPIES NFT:</h1>
        <p className='purple'>- The user will only be an NFT, but will enter the number of copies of it. The same thing that opensea or Rarible does on theirplatform. That is, the same duplicate NFT should not be displayed.</p><br /><br />
        <h3 className='text-primary'>**NFTS WITHOUT HASTAG**</h3>
        <h3>-5 COPIES: <span className='red'>0,0017 BNB</span> OR <span className='green'>28 AYRA</span> OR <span className='yellow'>14 ITHD</span> <span style={{ fontSize: '12px' }}>+SMART CHAIN NETWORK FEE</span></h3>
        <h3>-10 COPIES: <span className='red'>0,0022 BNB</span> OR <span className='green'>36 AYRA</span> OR <span className='yellow'>18 ITHD</span> <span style={{ fontSize: '12px' }}>+ SMART CHAIN NETWORK FEE</span></h3>
        <h3>-20 UNIT: <span className='red'>0,0029 BNB</span> OR <span className='green'>48 AYRA</span> OR <span className='yellow'>24 ITHD</span> <span style={{ fontSize: '12px' }}>+ SMART CHAIN NETWORK FEE</span></h3><br />
        <h3 className='text-primary'>**NFTS WITH HASTAG**</h3>
        <h3>-5 COPIES: <span className='red'>0,0039 BNB</span> OR <span className='green'>64 AYRA</span> OR <span className='yellow'>32 ITHD</span> <span style={{ fontSize: '12px' }}>+SMART CHAIN NETWORK FEE</span></h3>
        <h3>-10 COPIES: <span className='red'>0.0066 BNB</span> OR <span className='green'>108 AYRA</span> OR <span className='yellow'>54 ITHD</span> <span style={{ fontSize: '12px' }}>+ SMART CHAIN NETWORK FEE</span></h3>
        <h3>-20 UNIT: <span className='red'>0,0116 BNB</span> OR <span className='green'>191 AYRA</span> OR <span className='yellow'>95 ITHD</span> <span style={{ fontSize: '12px' }}>+ SMART CHAIN NETWORK FEE</span></h3><br />

        <h3 className='purple'>POLYGON NETWORK (MULTIPLE COPIES)</h3>
        <h3 className='text-primary'>**NFTS WITHOUT HASTAG**</h3>
        <h3>-5 COPIES: <span className='red'>0,50 MATIC</span> + <span style={{ fontSize: '12px' }}>POLYGON NETWORK FEE</span></h3>
        <h3>-10 COPIES: <span className='red'>0,66 MATIC</span> + <span style={{ fontSize: '12px' }}>POLYGON NETWORK FEE</span></h3>
        <h3>-20 COPIES: <span className='red'>0,87 MATIC</span> + <span style={{ fontSize: '12px' }}>POLYGON NETWORK FEE</span></h3><br />

        <h3 className='purple'>POLYGON NETWORK (MULTIPLE COPIES)</h3>
        <h3 className='text-primary'>**NFTS WITHOUT HASTAG**</h3>
        <h3>-5 COPIES: <span className='red'>1.17 MATIC</span> + <span style={{ fontSize: '12px' }}>POLYGON NETWORK FEE</span></h3>
        <h3>-10 COPIES: <span className='red'>2 MATIC</span> + <span style={{ fontSize: '12px' }}>POLYGON NETWORK FEE</span></h3>
        <h3>-20 COPIES: <span className='red'>3.5 MATIC</span> + <span style={{ fontSize: '12px' }}>POLYGON NETWORK FEE</span></h3><br />

        <span className='green'>*All fixed commission for MINT NFTS is our profit. Therefore it must go to our wallet.</span><br /><br />

        <h3 className='purple'>IS THEREFORE THE PRICE OF MINT ON OUR PLATFORM FIXED?</h3>
        <h3>YES, IT IS. FIXED PRICE (LIST BEFORE) + SMART CHAIN NETWORK FEE</h3><br /><br />

        <h3 className='purple'>DO WE HAVE ADDITIONAL VARIABLE COMMISSIONS? YES.</h3>
        <h3 className='red'>**FOR BNB OR MATIC TOKEN**</h3>
        <h4 className='red'>*SERVICE FEE 0,9% OF THE SALE PRICE</h4>
        <h4 className='red'>(DISCOUNTED FROM THE SALE PRICE) IF USER SELL FOR BNB OR MATIC.</h4>

        <p>- When a user sells an NFT within our platform, they have to pay a <span className='red'>commission of 0.9%</span> of the final sale Price . This means that when the buyer arrives and makes the purchase of the NFT, 0.9% of the value of the sale is collected by us and the rest goes to the hands of the person who has sold the NFT.</p>
        <p>- The user instead of selling the NFT can decide to send it as a gift. This behaves like an NFT transfer.</p>
        <p>The user who wants to give away the NFT decides the number of copies he wants to give away and the destination wallet address of the gift. At this time, the user who gifts the NFT (makes a transfer of the NFT) only pays the necessary network fee. Logically, at the moment the user gives away the NFT, it ceases to be in their possession, and if it was for sale, it is removed from sale.</p>
        <p>The user who receives the gift of the NFT, the web offers the possibility of putting it up for sale. At that time, the user will put it up for sale at the price they want, paying only the commission of the Smart Chain network.</p>
        <h3 className='red'>**FOR AYRA OR ITHD TOKEN**</h3>
        <h4 className='red'>*SERVICE FEE 0,5% OF THE SALE PRICE</h4>
        <h4 className='red'>(DISCOUNTED FROM THE SALE PRICE) IF USER SELL FOR AYRA OR ITHD.</h4>
        <br /><br/>
        <h3 className='purple'>So, the only variable commission charged is 0.9% of the total sale price. This commission is deducted from the price at which the NFT has been sold.</h3>
        <br /><br/>
        <h3 className='purple'>WHERE ARE MINTED NFTS?</h3>
        <p>After creating the NFT, the user will have that NFT in his wallet but will be able to see it in his private area(back-end), in the `MY NFTS` SECTION.</p>
        <p>The user will be able to create the collections they want. Creating a collection is priceless.</p>
        <p>It should be possible to create a collection without the need for network confirmation.</p>
        <p>Because at Opensea you can create collections free of charge.</p>
        <br />
        <h3 className='purple'>WHAT IS THE PRICE TO CREATE A COLLECTION?</h3>
        <p>The user will be able to create as many collections as he wants and the behavior should be like in Opensea, where creating a collection is 100% free. What is charged is the MINT of the NFTs.</p>
        <p>To upload an NFT, logically the user must create a collection.</p>
        <p>If you don`t, your NFT will be placed in the generic NFTS MAGICS collection, where all NFTS not linked to a specific collection will be displayed. Just as RARIBLE does with its generic collection.</p>

        <h3 className='purple'>WHAT IS THE NFTS MINTING EXECUTION LINE LIKE?</h3><br />
        <p>1) User PUSH in `Create NFT`` option.</p>
        <p>2) The user chooses between uploading their own image of their device, or using our own image editor.</p>
        <p>3) The image, gif or video for the NFT is uploaded to the interplanetary file system (IPFS).</p>
        <p>4) User fills in the NFT metadata (Title, description, royalties).</p>
        <p>5) The user will be able to choose at that moment, in the same form between 3 options:</p>
        <br />
        <h4><span className='text-primary'>OPTION 1)</span> MINT NFT TO SELL IT-ONLY 1 CONFIRMATION IN BLOCKCHAIN</h4>
        <p>In this option user can set Price and Royalties, and put it up for sale for the desired price and in exchange for the desired currency. It is only 1 blockchain confirmation</p>
        <br />
        <h4><span className='text-primary'>OPTION 2)</span> MINT NFT TO GIVE AWAY-ONLY 1 CONFIRMATION IN BLOCKCHAIN</h4>
        <p>In this option, the user writes the wallet address where he will send his gift NFT.</p>
        <p>Additionally, a unique link is generated to be sent to the recipient of the prize.</p>
        <p>In this way, the user can send said link to the recipient of the gift. When the person clicks on that link, NFTS magics will open, and the web will tell them:</p>
        <br />
        <h2>YOU RECEIVED A GIFT NFT IN THE WALLET: 0X00000000.CONNECT YOUR WALLET NOW TO SEE IT</h2><br />  
        <p>In other words, it indicates the wallet address in which the NFT has been received. FIRST CONNECT YOUR WALLET ADDRESS`</p>
        <p>And it tells you that you need to connect your wallet to the website to see it.</p>
        <p>When you connect the correct wallet, in your NFTS MAgics account, you should blink or have some very vivid prompt to go to the `MY GIFTS` section.</p>
        <p>Once inside my gifts, you will click on the gift and an envelope will open showing you the image of the NFT you have achieved.</p>
        <p>The user will not be able to see the NFT on the site until they have claimed their gift in the MY GIFTS section.</p>
        <p>Logically claiming the gift must be 100% free</p>
        <p>The person who receives the gift link, only has to click on it.</p>
        <p>Our website appears with the phrase:</p>
        <p>You have been gifted an NFT postcard!</p>
        <p>Connect your wallet and claim your prize.</p>
        <p>AFTER CLAIM PRIZE, Automatically, the web places a form for the target person to decide the price at which they want to sell said NFT. ALL GIFTS HAVE AUTOMATICALLY 10% ROYALTIES FOR CREATOR.</p>
        <p>If this person sells their NFT, 10% of the sale will go to the balance of the person who gave it to them in BNB, AYRA OR ITHD.</p><br />

        <h4><span className='text-primary'>OPTION 3)</span> MINT NFT TO STORE IT IN THE WALLET-ONLY 1 CONFIRMATION IN BLOCKCHAIN</h4>
        <p>In this option, the user will simply save his NFT in his wallet, and our website will show him the hash link of the transaction so that he can consult it if he wishes. ONLY 1 CONFIRMATION IN BLOCKCHAIN</p>
        
        <h5 className='purple'>HOW MANY NETWORK CONFIRMATIONS SHOULD A USER MAKE THEN FOR MINT? </h5>
        <h5 className='purple border-bottom-dashed'>IMPORTANT-1 AND ONLY 1.</h5>
        <hr />

        <h2 className='text-primary'>REWARDS FOR USING NFTS MAGICS TO MINT NFTS</h2>
        <p style={{ fontSize: "20px" }}>As you have seen, create an NFT on NTFSMAGICS.COM is not free. It has a fixed Fee, depending use BNB, AYRA or ITHD, as we have seen on the prices lists in this document.</p>

        <h3 className='green'>**However, when a user creates the NFT they enter directly into the distributed rewards system for 60 days.</h3>
        <p className='green' style={{ fontSize: '20px' }}>**If you have used BNB to create the NFT, you will participate in the distributed rewards of 5% of each purchase that happens on the platform for 60 days.</p><br />
        <p className='green' style={{ fontSize: '20px' }}>**On the contrary, if you have used AYRA OR ITHD to create the NFT, you will participate in the distributed rewards of 7% of each purchase that happens on the platform for 60 days.</p>

        <h3 style={{ color: 'brown' }}>**1 LOTTERY TICKET FOR EACH MINT**</h3>
        <p style={{ fontSize: '20px' }}><span className='red'>IMPORTANT</span>: Users who have created an NFT are entitled to a free entry in the built-in NFTS MAGICS lottery in the next draw to be held.</p>

        <p>**AT THE END OF THIS DOCUMENT I EXPLAIN ABOUT LOTTERY SYSTEM</p>
        <h3 style={{ color: 'rgba(0, 255, 0, .5)' }}>SELL NFT INTO NFTS MAGICS:</h3>

        <p>You can resell your personalized card within our platform.</p>
        <p>For this, each user with the wallet that connected to the site will automatically have their own store (USERS CAN CREATE COLLECTION FOR FREE AS IN OPENSEA ). You can sell your card at the price you want.</p>
        <p>To sell within your NFT WITHIN ntfs magics.com, you have your own collection(s) within your account. (A user can create collections for free, and then what is charged as we have seen is creating items (NFTS).</p>
        <p>**The user can set the price at which he/she wants to sell each unit in BNB, AYRA OR ITHD.</p>
        <p>So all nftsmagics NFT will be put up for sale with the <span className='green'>possibility to buy it with 3 options:</span> BNB, AYRA and ITHD.</p>
        <p>If the user did not put their NFT up for sale at the time of the MINT, then they will have a `SELL`` button to do so at the most convenient time.</p>
        <p>To put an NFT up for sale by clicking on Sell , the user will only have to pay the minimum possible fee in the Binance </p>
        <p>Smart Chain network.</p>
        <p>The same thing happens in the `Edit`` button of an NFT.</p><br />

        <h3 className='green'>HOW MUCH DOES A SELLER MAKE FROM THE DIRECT SALE OF THEIR NFT?</h3>
        <p>*The seller chooses the currency he/she wishes to receive after the sale of his NFT.</p>
        <p>*If the seller has opted for BNB, then they will receive 96% of the total purchase amount.</p>
        <p>This means that nfts magics deducts a total of 4% of the total purchase from the net profit after discounting the royalties.</p>
        <p>*If the seller of the NFT puts your NFT up for sale BY AYRA OR ITHD, you will receive 98% of the purchase amount (we deduct 2% of the purchase amount).</p><br />

        <p style={{ fontSize: '20px' }} className='text-primary'>WHAT HAPPENS WHEN A USER SELLS THEIR NFT?</p>
        <p style={{ fontSize: '20px' }}>So, The seller receives 96% of the sale in BNB. (4% TOTAL FEE).</p>
        <p style={{ fontSize: '20px' }}>So, The seller receives 98% of the sale in AYRA OR ITHD. (2% FEE).</p>
        <p style={{ fontSize: '20px' }}>We only charge 0,90% fee in SELL transaction in BNB.</p>
        <p style={{ fontSize: '20px' }}>We only charge 0,5% fee in SELL all transaction in AYRA, OR ITHD.</p><br />

        <p style={{ fontSize: 20 }} className="red">NFTS MAGICS HAS A AUTOMATIC REWARD DISTRIBUTION</p>
        <p style={{ fontSize: 20 }}>3,10% of all BNB sales are redistributed to everyone who has bought any NFTs in the last 60 days. If there have been no sales in those 60 days, this 3,10% accumulates until there are NFTS buyers in the last 60 days.</p>
        <p style={{ fontSize: 20 }}>1,5% of all AYRA or ITHD sales are redistributed to everyone who has bought any NFTs in the last 60 days. If there have been no sales in those 60 days, this 1,5% accumulates until there are NFTS buyers in the last 60 days.</p>
        <br /><br />

        <p style={{ fontSize: '20px', color:'red' }}>WHAT COMMISSION DOES THE COMPANY EARN (NFTS MAGICS)</p>
        <p style={{ fontSize: '20px' }}>*We win fixed fee for MINTING NFTS AND…</p>
        <p style={{ fontSize: '20px' }}>*We only earn 0,9% of all sales made in BNB, while we earn 0.5% of sales made in AYRA OR ITHD.</p>
        <br /><br />

        <p style={{ fontSize: 20, color: 'red' }}>SELLERS EARN EVERY TIME THEIR NFT IS SOLD (ROYALTY SYSTEM)</p>
        <p style={{ fontSize: 20 }}>NFTS creator can decide a maximum royalty for each sell of nft of 50%. </p>
        <p style={{ fontSize: 20 }}>All users will be able to see the Royalti that has an NFT applied to it.</p>
        <p style={{ fontSize: 20 }}><span className='green'>IMPORTANT:</span> When a sale occurs, first the benefit that corresponds to the creator is deducted for the Royalti applied to the NFT, and then, once the creator of the NFT has paid, the sales commission is deducted from the Seller. The remaining amount is what the seller has left.</p>
        <br /><br />

        <h3 className='purple'>PRACTICAL EXAMPLE:</h3>
        <p style={{ fontSize: 20 }}>A re-seller decides to sell a NFT at the price of 0,24 BNB. That NFT has a Royalty of 20% fixed by NFT CREATOR. </p>
        <p style={{ fontSize: 20 }}>The buyer buys it, so the buyer pay 0,24 BNB + necesary Smart chain </p>
        <p style={{ fontSize: 20 }}>Fee to make the transaction. So, buyer enters the automatic rewards system for the next 60 days.</p>
        <p style={{ fontSize: 20 }}>*20% OF 0,24 BNB = 0,048 BNB they go directly to the wallet of the original creator of the NFT.</p>
        <p style={{ fontSize: 20 }}>*BNB SELL TRANSACTION HAS A 4% TOTAL FEE (3,10% FOR REWARD SYSTEM + 0,90% FOR NFTS MAGICS COMPANY).</p>
        <p style={{ fontSize: 20 }}>*3,10% GOES TO REWARD SYSTEM BNB POT:</p>
        <p style={{ fontSize: 20 }}>3,10% FROM 0.24 BNB = 0,00744 BNB </p>
        <p style={{ fontSize: 20 }}>*0,90% GOES TO OUR COMPANY WALLET AS OUR BENEFIT</p>
        <p style={{ fontSize: 20 }}>0,90% FROM 0,24 BNB = 0,00216 BNB</p>
        <p style={{ fontSize: 20 }}>*Seller wins 100% - 20% (Royalties) -4% (SELL FEE) = 76 % </p>
        <p style={{ fontSize: 20 }}>76% FROM 0,24 BNB = 0,1824 BNB</p>
        <br /><br />

        <p style={{ fontSize: 20, color: 'red' }}>CASE-PERSON RECEIVING GIFT SELLS NFT IN BNB</p>
        <p style={{ fontSize: 20, color: '#59cfdb' }}>10 % for the person did the gift. (GIFTS NFTS HAVE FIXED ROYALTY OF 10%).</p>
        <p style={{ fontSize: 20 }}>86% of the sale in BNB, is for the person who made the sale and 3,10% for the BNB pot reward distributed to all buyers on the platform. </p>
        <p style={{ fontSize: 20 }}>0,90% is to us to maintain platform</p>
        <br /><br />

        <p style={{ fontSize: 20, color: 'red' }}>PERSON RECEIVING GIFT SELLS NFT IN AYRA OR ITHD</p>
        <p style={{ fontSize: 20, color: '#59cfdb' }}>10 % for the person did the gift.</p>
        <p style={{ fontSize: 20 }}>88% of the sale in AYRA OR ITHD, is for the person who made the sale and 1,5% for the reward distributed to all buyers on the platform.</p>
        <p style={{ fontSize: 20 }}>0,5% is to us to maintain platform.</p>
        <br /><br />


        <p style={{ fontSize: 20, color: 'red' }}>HOW DOES THAT 3,10% (BNB) OR 1,5% (AYRA OR ITHD) DISTRIBUTED REWARD WORK?</p>
        <p style={{ fontSize: 20 }}>The smart contract is calculated based on the currency that users are using to make payments and from there % is calculated.</p>
        <p style={{ fontSize: 20 }}>If that day they have been paid in total on the platform:</p>
        <p style={{ fontSize: 20 }}>3 BNB ... 3,10% = 0,093 BNB</p>
        <p style={{ fontSize: 20 }}>4500 AYRA ... 1,5% = 67.5 AYRA</p>
        <p style={{ fontSize: 20 }}>6500 ITHD ... 1,5% = 97.5 ITHD.</p>
        <p style={{ fontSize: 20 }}>That 3,10% (OR 1,5%) is then divided between the number of users (wallets) who have directly interacted with the card purchase contract in the last 60 days.</p>
        <p style={{ fontSize: 20 }}>Let`s imagine that there are 200 wallets that have already been purchased in the last 60 days:</p>
        <p style={{ fontSize: 20 }}>0,093 BNB / 200 = 0,000465 BNB per user in his/her balance.</p>
        <p style={{ fontSize: 20 }}>67.5 AYRA / 200 = 0,3375 AYRA per user in his/her balance.</p>
        <p style={{ fontSize: 20 }}>97.5 ITHD / 200 = 0,4875 ITHD per user in his/her balance.</p>
        <p style={{ fontSize: 20 }}>3,10% (OR 1,5%) reward is calculated each WEEK (FRIDAYS at 17:00 HOURS UTC).</p>

        <p>The user can claim their tokens from the balance whenever they want, to have them later in their metamask or wallet. But the BInance Smart Chain commission to claim the rewards must be paid by the user.</p>
        <p>The system must clearly differentiate between the balance of BNB, AYRA, ITHD within the web even without claiming, and the BNB, AYRA, ITHD that the user actually has in his metamask to be misleading.</p>
        <p>Since to collect the tokens won within the platform, it is necessary to press the claim button and pay the BNB fee required by the BSC network.</p>

        <p style={{ fontSize: 22, color: 'green' }}>**AFILIATE SYSTEM 20 %**</p>
        <p style={{ fontSize: 22, color: 'green' }}>*FOR BINANCE SMART CHAIN NETWORK AND POLYGON NETWORK.</p>
        <p style={{ fontSize: 22, color: 'red' }}>Guest referral system 20% of Amount Purchased.</p>
        <p style={{ fontSize: 22, color: 'red' }}>WE WILL PAY AUTOMATICALLY 10% IN AYRA, AND 10% IN ITHD IN USER BALANCE.(INTO USER ACCOUNT).</p>

        <p style={{ fontSize: 20 }}>Each person will have their own affiliate link.</p>
        <p style={{ fontSize: 20 }}>When the user shares said link, if the recipient makes a purchase of a card, the affiliate will receive 20% of the amount purchased, in the form of AYRA and ITHD tokens (10% of each).</p>
        <p style={{ fontSize: 20 }}><b>Example:</b></p>
        <p style={{ fontSize: 20 }}>Affiliate shares link and a person makes a purchase for the amount of 0.0040 BNB.</p>
        <p style={{ fontSize: 20 }}>The affiliate reward is not paid in BNB, but IS PAID in AYRA AND ITHD.</p><br />
        <p style={{ fontSize: 20 }}><b>Reward in AYRA:</b></p>
        <p style={{ fontSize: 20 }}>10% of 0.0040 BNB = 0.0004 BNB.</p>
        <p style={{ fontSize: 20 }}>RATE 1 AYRA = 0.000043 BNB</p>
        <p style={{ fontSize: 20 }}>*THE AFFILIATE WINS 9.30 AYRA</p><br />
        <p style={{ fontSize: 20 }}><b>Reward in ITHD:</b></p>
        <p style={{ fontSize: 20 }}>10% of 0.0040 BNB = 0.0004 BNB.</p>
        <p style={{ fontSize: 20 }}>RATE 1 ITHD = 0.00008 BNB</p>
        <p style={{ fontSize: 20 }}>*THE AFFILIATE WINS 5 ITHD</p>
        <p style={{ fontSize: 20 }}>SO, THIS AFFILIATE HAS WON 20% (10% IN ITHD AND 10% IN AYRA).</p>
        <br /><br />

        <p style={{ fontSize: 20, color: 'red' }}>FEES ON POLYGON NETWORK</p>
        <p style={{ fontSize: 20, color: '#59cfdb' }}>*In Polygon there is also a fixed commission per NFT mint within the platform, as is the case with the Binance Smart Chain network. These fixed fees for MINT are listed in this same document</p>
        <p style={{ fontSize: 20, color: '#59cfdb' }}>*On the other hand, there is a variable commission when selling an NFT, just like in the Binance Smart Chain network. This commission is 4% of the total amount of the sale.</p>
        <p style={{ fontSize: 20, color: '#59cfdb' }}>*Of this 4% of the total fee, 0.90% is our profit. The remaining 3.10% goes to a pool of rewards distributed in MATIC.</p>
        <br /><br />

        <p style={{ fontSize: 20, color: 'red' }}>ACCEPTED CURRENCIES IN POLYGON NETWORK</p>
        <p style={{ fontSize: 20, color: '#59cfdb' }}>*Only MATIC currency is accepted.</p>
        <p style={{ fontSize: 20, color: '#59cfdb' }}>*Therefore, within the Polygon Network you can only MINT, BUY or SELL using MATIC.</p>
        <br /><br />

        <p style={{ fontSize: 18, color: 'red' }}>HOW DOES THAT 3,10% POLYGON MATIC DISTRIBUTED REWARD WORK?</p>
        <p style={{ fontSize: 18 }}>EVERY WEEK IS DISTRIBUTED AMONG ALL THE BUYERS IN THE LAST 60 DAYS THE ACCUMULATED MATIC JACKPOT. OR BE IT, THE OPERATION IS SIMILAR TO THE BINANCE SMART CHAIN.</p>
        <p style={{ fontSize: 18 }}>If that day they have been paid in total on the platform:</p>
        <p style={{ fontSize: 18 }}>200 MATIC ... 3,10% = 6.2 MATIC</p>
        <p style={{ fontSize: 18 }}>That 3,10% is then divided between the number of users (wallets) who have directly interacted with the card purchase contract in the last 60 days.</p>
        <p style={{ fontSize: 18 }}>Let`s imagine that there are 15 wallets that have already been purchased in the last 60 days:</p>
        <p style={{ fontSize: 18 }}>6,2 MATIC / 15 = 0,4133 MATIC per user in his/her balance.</p>
        <p style={{ fontSize: 18 }}>3,10% reward is calculated each WEEK (FRIDAYS at 17:00 HOURS UTC).</p>

        <p>*The user can claim their tokens from the balance whenever they want, to have them later in their metamask or wallet. But the POLYGON NETWORK commission to claim the rewards must be paid by the user.</p>
        <p>The system must clearly differentiate between the balance of MATIC within the web even without claiming, and the MATIC that the user actually has in his metamask to be misleading.</p>
        <p>Since to collect the tokens won within the platform, it is necessary to press the claim button and pay the MATIC fee required by the POLYGON network.</p>
        <br /><br />

        <p style={{ fontSize: 20, color: 'purple' }}>AFFILIATE SYSTEM IN POLYGON</p>
        <p style={{ fontSize: 20, color: 'red' }}>Guest referral system 20% of Amount Purchased.</p>
        <p style={{ fontSize: 20, color: 'red' }}>WE WILL PAY AUTOMATICALLY 10% IN AYRA, AND 10% IN ITHD IN USER BALANCE. (INTO USER ACCOUNT).</p>
        <p style={{ fontSize: 20 }}>Each person will have their own affiliate link.</p>
        <p style={{ fontSize: 20 }}>When the user shares said link, if the recipient makes a purchase of a card, the affiliate will receive 20% of the amount purchased, in the form of AYRA and ITHD tokens (10% of each).</p>
        <p style={{ fontSize: 20 }}>*THE SAME AS IN BINANCE SMART CHAIN</p>
        <p style={{ fontSize: 20 }}><b>Example:</b></p>
        <p style={{ fontSize: 20 }}>Affiliate shares link and a person makes a purchase for the amount of 3,63 MATIC.</p>
        <p style={{ fontSize: 20 }}>The affiliate reward is not paid in MATIC, but IS PAID in AYRA AND ITHD (INTO ACCOUNT BALANCE INTO THE WEB).</p><br />
        <p style={{ fontSize: 20 }}><b>Reward in AYRA:</b></p>
        <p style={{ fontSize: 20 }}>10% of 3,63 MATIC = 0,363 MATIC.</p>
        <p style={{ fontSize: 20 }}>RATE 1 AYRA = 0,013 MATIC</p>
        <p style={{ fontSize: 20 }}>THEN 0,363 / 0,013 = 27,92</p>
        <p style={{ fontSize: 20 }}>*THE AFFILIATE WINS 27,92 AYRA</p><br />
        <p style={{ fontSize: 20 }}><b>Reward in ITHD:</b></p>
        <p style={{ fontSize: 20 }}>10% of 3,63 MATIC = 0,363 MATIC.</p>
        <p style={{ fontSize: 20 }}>RATE 1 ITHD = 0.021 MATIC</p>
        <p style={{ fontSize: 20 }}>THEN 0,363 / 0,021 = </p>
        <p style={{ fontSize: 20 }}>*THE AFFILIATE WINS 17,285 ITHD</p>
        <p style={{ fontSize: 20 }}>SO, THIS AFFILIATE HAS WON 20% (10% IN ITHD AND 10% IN AYRA).</p>
        <br /><br />

        <p style={{ fontSize: 25, color: 'red' }}>HOW TO BUY AYRA OR ITHD?</p>
        <p>* The purchase of AYRA and ITHD in exchange for BNB should be allowed within the platform.</p>
        <p>* The system should allow me to change the price whenever I want.</p>
        <p>* AYRA starting price 0,0000000017 BNB.</p>
        <p>*ITHD starting Price 0,0000048 BNB</p>
        <br /><br />

        <p style={{ fontSize: 35, color: '#ef39bb' }}>WEEKLY LOTTERY SYSTEM</p>
        <p style={{ fontSize: 17 }}>In a section of the web, you must put LOTTERY.</p>
        <p style={{ fontSize: 17 }}>*The website will feature 2 identical lotteries, but on different networks. One lottery for the BInance Smart Chain network and another lottery for the POLYGON network.*</p>
        <p style={{ fontSize: 17 }}>Therefore there are 2 Lottery Pools.</p>
        <p style={{ fontSize: 17 }}>Operation should be simple (such as <a href='https://freebitco.in'>https://freebitco.in</a>).</p>
        <p style={{ fontSize: 17 }}>Users can buy lottery tickets to participate in it.</p>
        <p style={{ fontSize: 17 }}>The greater the number of tickets, the greater the chances of winning.</p>
        <p style={{ fontSize: 17 }}>Tickets purchased are accumulated from Sunday at 12:00 at night (start of Monday), until Saturday at 12:00 at night (start of Sunday).</p>
        <p style={{ fontSize: 17 }}>Among all the tickets purchased, 3 winners are chosen.</p>

        <p>Each user can buy the number of lottery tickets they want.</p>
        <br />

        <p className='red'>LOTTERY TICKETS – PRICES</p>
        <p><b>MATIC:</b> 0,65 MATIC PER TICKET (Only For Polygon lottery)</p>
        <p><b>BNB:</b> 0,0015 BNB PER TICKET.</p>
        <p><b>AYRA:</b> 8 AYRA PER TICKET</p>
        <p><b>ITHD:</b> 10 ITHD PER TICKET</p>
        <br />
        <p>Users who have created an NFT within the platform (IN BINANCE CHAIN OR IN POLYGON NETWORK) directly have a certain ticket number, depending on the number of NFTS created.</p>
        <p>USER CREATE 1 NFT: USER RECEIVED 1 lottery tickets</p>
        <p>USER CREATE 2 NFT (OR 2 COPIES): USER RECEIVED 2 lottery tickets</p>
        <p>USER CREATE 3 NFT (OR 3 COPIES): USER RECEIVED 3 lottery tickets ….</p>

        <p className='red'>HOW IS THE PRIZE RECEIVED?</p>
        <p>USER CREATE 3 NFT: USER RECEIVED 3 lottery tickets ….</p>
        <p>SUNDAY, AT 17:00 UTC The random draw is made among all the purchased tickets.</p>
        <p>The first ticket out is the third prize.</p>
        <p>The second ticket out is the second prize.</p>
        <p>The third ticket to come out is the first prize.</p>
        <p>That`s how it gives you emotion.</p>
        <p>It is automatically published on the web when the draw is taking place, and the numbers of tickets that are coming out.</p>
        <p>3 prize is for ticket number: xxxxxxx and the Wallet account</p>
        <p>2 prize is for ticket number:</p>
        <p>xxxxxx and the wallet account</p>
        <p>1 prize is for ticket number:</p>
        <p>xxxxx and the wallet account.</p>

        <p className='red'>PRIZES VALUE</p>
        <p>90% of the pot is shared among the winners (as explained below). The remaining 10% is received by the company (NFTSMAGICS.COM) in our own wallet to carry out marketing tasks, burning, etc.</p>
        <p>3º WINNER…… RECEIVE 20% of the lottery jackpot (pot or acumulated money for people).</p>
        <p>2º WINNER…… RECEIVE 30% of the lottery jackpot (pot or acumulated money for people).</p>
        <p>1º WINNER…… RECEIVE 40% of the lottery jackpot (pot or acumulated money for people).</p>
        <br /><br />

        <p className='purple'>POTS SYSTEM FOR BINANCE SMART CHAIN NETWORK</p>
        <p>The smart contract in Binance Smart chain must be able to create 3 common funds (pots):</p>
        <p>-One for BNB raised</p>
        <p>-Another for the AYRA collected</p>
        <p>-Another for the ITHD collected.</p>
        <p>Therefore, when a user wins the prize, he/she earns his percentage in each of the currencies that have been used to buy the tickets.</p>
        <br /><br />

        <p className='red'>PRACTICAL EXAMPLE LOTTERY</p>
        <p>During the week there are a total of 1500 active lottery tickets.</p>
        <p>Let`s imagine that 700 has been purchased directly using BNB.</p>
        <p>500 has been purchased directly using AYRA</p>
        <p>300 has been purchased directly using ITHD</p>
        <br />

        <ul>
            <li><span className='purple'>IMPORTANT:</span> When a user creates an nft they are given a lottery ticket. This ticket is automatically considered as purchased in Ayra.</li>
        </ul>

        <br />
        <p className='red'>REMEMBER LOTTERY TICKETS – PRICES</p>
        <p><b>BNB:</b> <span style={{ color: '#558139' }}>0,0015</span> BNB PER TICKET.</p>
        <p><b>AYRA:</b> <span style={{ color: '#2d7d33' }}>8</span> AYRA PER TICKET</p>
        <p><b>ITHD:</b> <span style={{ color: '#59cfdb' }}>10</span> ITHD PER TICKET</p>
        <br />
        <p>In the example, 700 tickets were purchased using BNB directly.-→ 700 X <span style={{ color: '#558139' }}>0,0015</span> = 1.05 BNB IN BNB ACUMULATED.</p>
        <p>In the example, 500 tickets were purchased using AYRA directly.-→ 500 X <span style={{ color: '#2d7d33' }}>8</span> = 4000 AYRA IN AYRA ACUMULATED.</p>
        <p>In the example, 300 tickets were purchased using ITHD directly.-→ 300 X <span style={{ color: '#59cfdb' }}>10</span> = 3000 ITHD IN ITHD ACUMULATED.</p>
        <p>*10% IS FOR US (NFTSMAGICS.COM)</p>

        <p>-1.05 BNB * 10% / 100 = 0.105 BNB FOR US.</p>
        <p>-4000 AYRA * 10% / 100 = 400 AYRA FOR US.</p>
        <p>-3000 ITHD * 10% / 100 = 300 ITHD FOR US.</p>
        <br />

        <p>*90% IS USED FOR LOTTERY:</p>
        <p>-1.05 BNB * 90% / 100 = <span className='purple'>0.945 BNB FOR LOTTERY</span></p>
        <p>-4000 AYRA * 90% / 100 = <span className='purple'>3600 AYRA FOR LOTTERY</span></p>
        <p>-3000 ITHD * 90% / 100 = <span className='purple'>2700 ITHD FOR LOTTERY</span></p>
        <p>PRIZE THIRD PLACE WINNER: -0.945 BNB * 20%/100 = <span style={{ color: '#59cfdb' }}>0.189 BNB</span></p>
        <p>-3600 AYRA * 20% / 100 = <span style={{ color: '#59cfdb' }}>720 AYRA</span></p>
        <p>-2700 ITHD * 20% / 100 = <span style={{ color: '#59cfdb' }}>540 ITHD</span></p><br />
        <p>PRIZE SECOND PLACE WINNER: -0.945 BNB * 30%/100 = <span style={{ color: '#59cfdb' }}>0.2835 BNB</span></p>
        <p>-3600 AYRA * 30% / 100 = <span style={{ color: '#59cfdb' }}>1080 AYRA</span></p>
        <p>-2700 ITHD * 30% / 100 = <span style={{ color: '#59cfdb' }}>810 ITHD</span></p><br />
        <p>PRIZE FIRST PLACE WINNER: -0.945 BNB * 40%/100 = <span style={{ color: '#59cfdb' }}>0.378 BNB</span></p>
        <p>-3600 AYRA * 40% / 100 = <span style={{ color: '#59cfdb' }}>1440 AYRA</span></p>
        <p>-2700 ITHD * 40% / 100 = <span style={{ color: '#59cfdb' }}>1080 ITHD</span></p><br />
        <p>The user has an area where they can check if they have prizes or not. The prize you have won is sent directly to your wallet, if possible.</p>

        <p>If this is not possible, you will have a section where you will only have to press a withdraw button and through a notification from your wallet (example metamask) you will receive the tokens in your wallet.</p>
        <p>Perhaps this process should be done separately between the 3 tokens, since it is done.</p>
        <p>Examples of lotteries that exist in the market are Pool together and Biswap Lottery</p>


        <p style={{ fontSize: 20, color: 'purple' }}>HOW THE POLYGON LOTTERY WORKS</p>
        <p>*In this case there is only one pot of MATIC.</p>
        <p>*The interface and ticket system must be identical to that of binance smart chain, explained above.</p>
        <p>*Every person who has mint 1 nft in MATIC is entitled to 1 lottery ticket for the next available draw.</p>
        <p>*The dates of the draws and everything else is the same. *The difference is that in this lottery you do not win AYRA or ITHD, since it is not possible because they are on different networks</p>
        <br /><br />

        <p className='red'>POLYGON LOTTERY TICKETS – PRICES</p>
        <p><b>MATIC:</b> 0,65 MATIC PER TICKET </p>
        <p>*ALSO USER CAN WIN 1 TICKET PER EACH NFT MINTED INTO HERE.</p>
        <br />

        <p>In the example, 1000 tickets were purchased using MATIC directly.-→ 1000 X 0.65 = 650 MATIC ACUMULATED.</p>
        <p>*10% IS FOR US (NFTSMAGICS.COM)</p>
        <p>-650 MATIC * 10% / 100 = 65 MATIC FOR US.</p>
        <br />

        <p>*90% IS USED FOR LOTTERY:</p>
        <p>-650 MATIC * 90% / 100 = <span className='purple'>585 MATIC FOR LOTTERY</span></p>
        <br />

        <p>PRIZE THIRD PLACE WINNER: -585 MATIC * 20%/100 = <span>117 MATIC</span></p>
        <p>**FIXED REWARD 2000 AYRA + 500 ITHD IN WEB ACCOUNT BALANCE- TO WITHDRAw IT USER WILL HAVE TO MAKE IT WITH BNB**</p>
        <br />

        <p>PRIZE SECOND PLACE WINNER: -585 MATIC * 30%/100 = <span style={{ color: '#59cfdb' }}>175.5 MATIC</span></p>
        <p>**FIXED REWARD 3500 AYRA + 800 ITHD IN WEB ACCOUNT BALANCE- TO WITHDRAW IT USER WILL HAVE TO MAKE IT WITH BNB**</p>
        <br />

        <p>PRIZE FIRST PLACE WINNER: -585 MATIC * 40%/100 = <span style={{ color: '#59cfdb' }}>234 MATIC</span></p>
        <p>**FIXED REWARD 6000 AYRA + 1400 ITHD IN WEB ACCOUNT BALANCE- TO WITHDRAW IT USER WILL HAVE TO MAKE IT WITH BNB**</p>
        <br /><br />

        <p style={{ color: '#ff4002', fontSize: 20 }}>WHO CHOOSES THE DESIGN OF THE WEBSITE AND THE POSTCARDS AND IMAGES WITHIN THE WEBSITE?</p>
        <p>I want all the design responsive for pc, tablets, and mobiles, everything to be done by you with total freedom. That is why we want a highly creative person for the elaboration of this project.</p>
        <p>However, if you need a pack of images we could elaborate it but since we have very little time I beg you to do it all, everything.</p>
        <br /><br />

        <p style={{ color: '#ff4002' }}>Maximum budget for this development?</p>
        <p>We need the job for a maximum of $3000. 2800$ ALL JOB DONE AND 200$ FOR INSTALL IT IN OUR HOSTING.</p>
        <p>WE HAVE VPS LINUX SERVER IN IONOS ENTERPRISE.</p>
    </React.Fragment>
}

export default FAQ;