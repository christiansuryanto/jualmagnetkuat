function LoadTheArchive(TotalFeed) 
{
    var PostTitles = new Array();
    var PostURLs = new Array();
    var PostYears = new Array();
    var PostMonths = new Array();
    var PostDays = new Array();
    if("entry" in TotalFeed.feed) 
    {
	var PostEntries=TotalFeed.feed.entry.length;
	for(var PostNum=0; PostNum<PostEntries ; PostNum++) 
	{
	    var ThisPost = TotalFeed.feed.entry[PostNum];
	    PostTitles.push(ThisPost.title.$t);
	    PostYears.push(ThisPost.published.$t.substring(0,4));
	    PostMonths.push(ThisPost.published.$t.substring(5,7));
	    PostDays.push(ThisPost.published.$t.substring(8,10));
	    var ThisPostURL;
	    for(var LinkNum=0; LinkNum < ThisPost.link.length; LinkNum++) 
	    {
		if(ThisPost.link[LinkNum].rel == "alternate") 
		{
		    ThisPostURL = ThisPost.link[LinkNum].href;
		    break
		}
	    }
	    PostURLs.push(ThisPostURL);
	}
    }
    DisplaytheTOC(PostTitles,PostURLs,PostYears,PostMonths,PostDays);
}

function DisplaytheTOC(PostTitles,PostURLs,PostYears,PostMonths,PostDays)
{
    var MonthNames=["January","February","March","April","May","June","July","August","September","October","November","December"];
    var NumberOfEntries=PostTitles.length;
    var ulclass="u1";
	document.write('<style>ul.b {list-style-type: none;}</style>');
	document.write('<style>li.u1 {background:#33c9f7; position:relative;margin:6px 0;border-radius:25px 0px 25px 0px;border:2px solid #f7f7f7;-webkit-box-shadow:3px 3px 3px #000;-moz-box-shadow: 3px 3px 3px #000;padding:10px}</style>');
	document.write('<style>li.u2 {background:#c5f35f; position:relative;margin:6px 0;border-radius:25px 0px 25px 0px;border:2px solid #f7f7f7;-webkit-box-shadow:3px 3px 3px #000;-moz-box-shadow: 3px 3px 3px #000;padding:10px}</style>');
	document.write('<style>li.u3 {background:#ffdd4b; position:relative;margin:6px 0;border-radius:25px 0px 25px 0px;border:2px solid #f7f7f7;-webkit-box-shadow:3px 3px 3px #000;-moz-box-shadow: 3px 3px 3px #000;padding:10px}</style>');
	document.write('<style>li.u4 {background:#fa774b; position:relative;margin:6px 0;border-radius:25px 0px 25px 0px;border:2px solid #f7f7f7;-webkit-box-shadow:3px 3px 3px #000;-moz-box-shadow: 3px 3px 3px #000;padding:10px}</style>');
	document.write('<style>a.b {-webkit-text-size-adjust: auto; -webkit-text-stroke-width: 0px;  color: #333333; display: block; font-family: Georgia, "Times New Roman"", Times, serif; font-size: 13px; font-style: normal; font-variant: normal; font-weight: normal; letter-spacing: normal; line-height: 18px; margin: 0px 40px 0px 0px; min-height: 30px; orphans: 2; padding: 0px; text-align: -webkit-auto; text-decoration: none !important; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px;}</style>');
	document.write('<style>a.b:hover{color:#555;text-decoration:none;}</style>');
	document.write('<ul class="b">');
	for(var EntryNum = 0; EntryNum < NumberOfEntries; EntryNum++)
    {
	if(EntryNum%4 == 0) ulclass="u1";
	if(EntryNum%4 == 1) ulclass="u2";
	if(EntryNum%4 == 2) ulclass="u3";
	if(EntryNum%4 == 3) ulclass="u4";
	
	NameOfMonth = MonthNames[parseInt(PostMonths[EntryNum],10)-1]
	document.write('<a href ="'+PostURLs[EntryNum]+'" class="b"><li class="'+ulclass+'">'+PostTitles[EntryNum]+"</li></a>");
    }
	document.write('</ul>');
}