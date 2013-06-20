  


<!DOCTYPE html>
<html>
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# githubog: http://ogp.me/ns/fb/githubog#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>jquery-Mustache/jquery.mustache.js at v0.2.7 · jonnyreeves/jquery-Mustache · GitHub</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub" />
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub" />
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png" />
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png" />
    <link rel="logo" type="image/svg" href="http://github-media-downloads.s3.amazonaws.com/github-logo.svg" />
    <link rel="assets" href="https://a248.e.akamai.net/assets.github.com/">
    <link rel="xhr-socket" href="/_sockets" />
    


    <meta name="msapplication-TileImage" content="/windows-tile.png" />
    <meta name="msapplication-TileColor" content="#ffffff" />
    <meta name="selected-link" value="repo_source" data-pjax-transient />
    <meta content="collector.githubapp.com" name="octolytics-host" /><meta content="github" name="octolytics-app-id" />

    
    
    <link rel="icon" type="image/x-icon" href="/favicon.ico" />

    <meta content="authenticity_token" name="csrf-param" />
<meta content="MFBvnzikbPhLyIfg9epN1+ioGDTrXegUPxXTrMDlAkI=" name="csrf-token" />

    <link href="https://a248.e.akamai.net/assets.github.com/assets/github-0c2e6b2f619f4aafd0dc861f56d66b8fc3b130eb.css" media="all" rel="stylesheet" type="text/css" />
    <link href="https://a248.e.akamai.net/assets.github.com/assets/github2-149b0b090f3d6d56cf335d40cbfa1b7a15869f26.css" media="all" rel="stylesheet" type="text/css" />
    


      <script src="https://a248.e.akamai.net/assets.github.com/assets/frameworks-4c434fa1705bf526e191eec0cd8fab1a5ce3e326.js" type="text/javascript"></script>
      <script src="https://a248.e.akamai.net/assets.github.com/assets/github-1d3dcfe418be5cc86b6add463632b9e2cfe0cd0d.js" type="text/javascript"></script>
      
      <meta http-equiv="x-pjax-version" content="5358865310447c79347ea30bb9fd8280">

        <link data-pjax-transient rel='permalink' href='/jonnyreeves/jquery-Mustache/blob/9b04e360b9718cde04f2f4c5b36f507303bce575/jquery.mustache.js'>
    <meta property="og:title" content="jquery-Mustache"/>
    <meta property="og:type" content="githubog:gitrepository"/>
    <meta property="og:url" content="https://github.com/jonnyreeves/jquery-Mustache"/>
    <meta property="og:image" content="https://secure.gravatar.com/avatar/b9fafe59efd9e0c582566860242dd7a4?s=420&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png"/>
    <meta property="og:site_name" content="GitHub"/>
    <meta property="og:description" content="jquery-Mustache - Mustache templating plugin for jQuery"/>
    <meta property="twitter:card" content="summary"/>
    <meta property="twitter:site" content="@GitHub">
    <meta property="twitter:title" content="jonnyreeves/jquery-Mustache"/>

    <meta name="description" content="jquery-Mustache - Mustache templating plugin for jQuery" />


    <meta content="200185" name="octolytics-dimension-user_id" /><meta content="jonnyreeves" name="octolytics-dimension-user_login" /><meta content="3422568" name="octolytics-dimension-repository_id" /><meta content="jonnyreeves/jquery-Mustache" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="3422568" name="octolytics-dimension-repository_network_root_id" /><meta content="jonnyreeves/jquery-Mustache" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/jonnyreeves/jquery-Mustache/commits/v0.2.7.atom" rel="alternate" title="Recent Commits to jquery-Mustache:v0.2.7" type="application/atom+xml" />

  </head>


  <body class="logged_out page-blob  vis-public env-production  ">
    <div id="wrapper">

      
      
      

      
      <div class="header header-logged-out">
  <div class="container clearfix">

    <a class="header-logo-wordmark" href="https://github.com/">Github</a>

    <div class="header-actions">
      <a class="button primary" href="/signup">Sign up</a>
      <a class="button" href="/login?return_to=%2Fjonnyreeves%2Fjquery-Mustache%2Fblob%2Fv0.2.7%2Fjquery.mustache.js">Sign in</a>
    </div>

    <div class="command-bar js-command-bar  in-repository">


      <ul class="top-nav">
          <li class="explore"><a href="/explore">Explore</a></li>
        <li class="features"><a href="/features">Features</a></li>
          <li class="enterprise"><a href="http://enterprise.github.com/">Enterprise</a></li>
          <li class="blog"><a href="/blog">Blog</a></li>
      </ul>
        <form accept-charset="UTF-8" action="/search" class="command-bar-form" id="top_search_form" method="get">
  <a href="/search/advanced" class="advanced-search-icon tooltipped downwards command-bar-search" id="advanced_search" title="Advanced search"><span class="octicon octicon-gear "></span></a>

  <input type="text" data-hotkey="/ s" name="q" id="js-command-bar-field" placeholder="Search or type a command" tabindex="1" autocapitalize="off"
    
      data-repo="jonnyreeves/jquery-Mustache"
      data-branch="v0.2.7"
      data-sha="306e3ec6123b49cff44f42c422c24e895bac60d9"
  >

    <input type="hidden" name="nwo" value="jonnyreeves/jquery-Mustache" />

    <div class="select-menu js-menu-container js-select-menu search-context-select-menu">
      <span class="minibutton select-menu-button js-menu-target">
        <span class="js-select-button">This repository</span>
      </span>

      <div class="select-menu-modal-holder js-menu-content js-navigation-container">
        <div class="select-menu-modal">

          <div class="select-menu-item js-navigation-item selected">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" class="js-search-this-repository" name="search_target" value="repository" checked="checked" />
            <div class="select-menu-item-text js-select-button-text">This repository</div>
          </div> <!-- /.select-menu-item -->

          <div class="select-menu-item js-navigation-item">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" name="search_target" value="global" />
            <div class="select-menu-item-text js-select-button-text">All repositories</div>
          </div> <!-- /.select-menu-item -->

        </div>
      </div>
    </div>

  <span class="octicon help tooltipped downwards" title="Show command bar help">
    <span class="octicon octicon-question"></span>
  </span>


  <input type="hidden" name="ref" value="cmdform">

  <div class="divider-vertical"></div>

</form>
    </div>

  </div>
</div>


      


            <div class="site hfeed" itemscope itemtype="http://schema.org/WebPage">
      <div class="hentry">
        
        <div class="pagehead repohead instapaper_ignore readability-menu ">
          <div class="container">
            <div class="title-actions-bar">
              

<ul class="pagehead-actions">



    <li>
      <a href="/login?return_to=%2Fjonnyreeves%2Fjquery-Mustache"
        class="minibutton with-count js-toggler-target star-button entice tooltipped upwards"
        title="You must be signed in to use this feature" rel="nofollow">
        <span class="octicon octicon-star"></span>Star
      </a>
      <a class="social-count js-social-count" href="/jonnyreeves/jquery-Mustache/stargazers">
        76
      </a>
    </li>
    <li>
      <a href="/login?return_to=%2Fjonnyreeves%2Fjquery-Mustache"
        class="minibutton with-count js-toggler-target fork-button entice tooltipped upwards"
        title="You must be signed in to fork a repository" rel="nofollow">
        <span class="octicon octicon-git-branch"></span>Fork
      </a>
      <a href="/jonnyreeves/jquery-Mustache/network" class="social-count">
        34
      </a>
    </li>
</ul>

              <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
                <span class="repo-label"><span>public</span></span>
                <span class="mega-octicon octicon-repo"></span>
                <span class="author vcard">
                  <a href="/jonnyreeves" class="url fn" itemprop="url" rel="author">
                  <span itemprop="title">jonnyreeves</span>
                  </a></span> /
                <strong><a href="/jonnyreeves/jquery-Mustache" class="js-current-repository">jquery-Mustache</a></strong>
              </h1>
            </div>

            
  <ul class="tabs">
    <li class="pulse-nav"><a href="/jonnyreeves/jquery-Mustache/pulse" class="js-selected-navigation-item " data-selected-links="pulse /jonnyreeves/jquery-Mustache/pulse" rel="nofollow"><span class="octicon octicon-pulse"></span></a></li>
    <li><a href="/jonnyreeves/jquery-Mustache/tree/v0.2.7" class="js-selected-navigation-item selected" data-selected-links="repo_source repo_downloads repo_commits repo_tags repo_branches /jonnyreeves/jquery-Mustache/tree/v0.2.7">Code</a></li>
    <li><a href="/jonnyreeves/jquery-Mustache/network" class="js-selected-navigation-item " data-selected-links="repo_network /jonnyreeves/jquery-Mustache/network">Network</a></li>
    <li><a href="/jonnyreeves/jquery-Mustache/pulls" class="js-selected-navigation-item " data-selected-links="repo_pulls /jonnyreeves/jquery-Mustache/pulls">Pull Requests <span class='counter'>1</span></a></li>

      <li><a href="/jonnyreeves/jquery-Mustache/issues" class="js-selected-navigation-item " data-selected-links="repo_issues /jonnyreeves/jquery-Mustache/issues">Issues <span class='counter'>7</span></a></li>

      <li><a href="/jonnyreeves/jquery-Mustache/wiki" class="js-selected-navigation-item " data-selected-links="repo_wiki /jonnyreeves/jquery-Mustache/wiki">Wiki</a></li>


    <li><a href="/jonnyreeves/jquery-Mustache/graphs" class="js-selected-navigation-item " data-selected-links="repo_graphs repo_contributors /jonnyreeves/jquery-Mustache/graphs">Graphs</a></li>


  </ul>
  
<div class="tabnav">

  <span class="tabnav-right">
    <ul class="tabnav-tabs">
          <li><a href="/jonnyreeves/jquery-Mustache/tags" class="js-selected-navigation-item tabnav-tab" data-selected-links="repo_tags /jonnyreeves/jquery-Mustache/tags">Tags <span class="counter ">5</span></a></li>
    </ul>
  </span>

  <div class="tabnav-widget scope">


    <div class="select-menu js-menu-container js-select-menu js-branch-menu">
      <a class="minibutton select-menu-button js-menu-target" data-hotkey="w" data-ref="v0.2.7">
        <span class="octicon octicon-tag"></span>
        <i>tag:</i>
        <span class="js-select-button">v0.2.7</span>
      </a>

      <div class="select-menu-modal-holder js-menu-content js-navigation-container">

        <div class="select-menu-modal">
          <div class="select-menu-header">
            <span class="select-menu-title">Switch branches/tags</span>
            <span class="octicon octicon-remove-close js-menu-close"></span>
          </div> <!-- /.select-menu-header -->

          <div class="select-menu-filters">
            <div class="select-menu-text-filter">
              <input type="text" id="commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
            </div>
            <div class="select-menu-tabs">
              <ul>
                <li class="select-menu-tab">
                  <a href="#" data-tab-filter="branches" class="js-select-menu-tab">Branches</a>
                </li>
                <li class="select-menu-tab">
                  <a href="#" data-tab-filter="tags" class="js-select-menu-tab">Tags</a>
                </li>
              </ul>
            </div><!-- /.select-menu-tabs -->
          </div><!-- /.select-menu-filters -->

          <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket css-truncate" data-tab-filter="branches">

            <div data-filterable-for="commitish-filter-field" data-filterable-type="substring">

                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon octicon octicon-check"></span>
                  <a href="/jonnyreeves/jquery-Mustache/blob/0.2-dev/jquery.mustache.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="0.2-dev" rel="nofollow" title="0.2-dev">0.2-dev</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon octicon octicon-check"></span>
                  <a href="/jonnyreeves/jquery-Mustache/blob/0.3-dev/jquery.mustache.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="0.3-dev" rel="nofollow" title="0.3-dev">0.3-dev</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon octicon octicon-check"></span>
                  <a href="/jonnyreeves/jquery-Mustache/blob/master/jquery.mustache.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="master" rel="nofollow" title="master">master</a>
                </div> <!-- /.select-menu-item -->
            </div>

              <div class="select-menu-no-results">Nothing to show</div>
          </div> <!-- /.select-menu-list -->


          <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket css-truncate" data-tab-filter="tags">
            <div data-filterable-for="commitish-filter-field" data-filterable-type="substring">

                <div class="select-menu-item js-navigation-item selected">
                  <span class="select-menu-item-icon octicon octicon-check"></span>
                  <a href="/jonnyreeves/jquery-Mustache/blob/v0.2.7/jquery.mustache.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v0.2.7" rel="nofollow" title="v0.2.7">v0.2.7</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon octicon octicon-check"></span>
                  <a href="/jonnyreeves/jquery-Mustache/blob/v0.2.6/jquery.mustache.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v0.2.6" rel="nofollow" title="v0.2.6">v0.2.6</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon octicon octicon-check"></span>
                  <a href="/jonnyreeves/jquery-Mustache/blob/v0.2.5/jquery.mustache.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v0.2.5" rel="nofollow" title="v0.2.5">v0.2.5</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon octicon octicon-check"></span>
                  <a href="/jonnyreeves/jquery-Mustache/blob/v0.2.4/jquery.mustache.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v0.2.4" rel="nofollow" title="v0.2.4">v0.2.4</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon octicon octicon-check"></span>
                  <a href="/jonnyreeves/jquery-Mustache/blob/v0.2.3/jquery.mustache.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v0.2.3" rel="nofollow" title="v0.2.3">v0.2.3</a>
                </div> <!-- /.select-menu-item -->
            </div>

            <div class="select-menu-no-results">Nothing to show</div>

          </div> <!-- /.select-menu-list -->

        </div> <!-- /.select-menu-modal -->
      </div> <!-- /.select-menu-modal-holder -->
    </div> <!-- /.select-menu -->

  </div> <!-- /.scope -->

  <ul class="tabnav-tabs">
    <li><a href="/jonnyreeves/jquery-Mustache/tree/v0.2.7" class="selected js-selected-navigation-item tabnav-tab" data-selected-links="repo_source /jonnyreeves/jquery-Mustache/tree/v0.2.7">Files</a></li>
    <li><a href="/jonnyreeves/jquery-Mustache/commits/v0.2.7" class="js-selected-navigation-item tabnav-tab" data-selected-links="repo_commits /jonnyreeves/jquery-Mustache/commits/v0.2.7">Commits</a></li>
    <li><a href="/jonnyreeves/jquery-Mustache/branches" class="js-selected-navigation-item tabnav-tab" data-selected-links="repo_branches /jonnyreeves/jquery-Mustache/branches" rel="nofollow">Branches <span class="counter ">3</span></a></li>
  </ul>

</div>

  
  
  


            
          </div>
        </div><!-- /.repohead -->

        <div id="js-repo-pjax-container" class="container context-loader-container" data-pjax-container>
          


<!-- blob contrib key: blob_contributors:v21:3c85194045e22247c16364d163697b53 -->
<!-- blob contrib frag key: views10/v8/blob_contributors:v21:3c85194045e22247c16364d163697b53 -->

<div id="slider">
    <div class="frame-meta">

      <p title="This is a placeholder element" class="js-history-link-replace hidden"></p>

        <a href="/jonnyreeves/jquery-Mustache/find/v0.2.7" class="js-slide-to" data-hotkey="t" style="display:none">Show File Finder</a>

        <div class="breadcrumb">
          <span class='bold'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/jonnyreeves/jquery-Mustache/tree/v0.2.7" class="js-slide-to" data-branch="v0.2.7" data-direction="back" itemscope="url"><span itemprop="title">jquery-Mustache</span></a></span></span><span class="separator"> / </span><strong class="final-path">jquery.mustache.js</strong> <span class="js-zeroclipboard zeroclipboard-button" data-clipboard-text="jquery.mustache.js" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
        </div>


        
  <div class="commit file-history-tease">
    <img class="main-avatar" height="24" src="https://secure.gravatar.com/avatar/b9fafe59efd9e0c582566860242dd7a4?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
    <span class="author"><a href="/jonnyreeves" rel="author">jonnyreeves</a></span>
    <time class="js-relative-date" datetime="2013-01-30T14:16:41-08:00" title="2013-01-30 14:16:41">January 30, 2013</time>
    <div class="commit-title">
        <a href="/jonnyreeves/jquery-Mustache/commit/9b04e360b9718cde04f2f4c5b36f507303bce575" class="message">Fixed Issue</a> <a href="https://github.com/jonnyreeves/jquery-Mustache/issues/16" class="issue-link" title="Work with all possible IDs">#16</a> <a href="/jonnyreeves/jquery-Mustache/commit/9b04e360b9718cde04f2f4c5b36f507303bce575" class="message">- changed addFromDom() selector logic.</a>
    </div>

    <div class="participation">
      <p class="quickstat"><a href="#blob_contributors_box" rel="facebox"><strong>1</strong> contributor</a></p>
      
    </div>
    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list">
        <li class="facebox-user-list-item">
          <img height="24" src="https://secure.gravatar.com/avatar/b9fafe59efd9e0c582566860242dd7a4?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/jonnyreeves">jonnyreeves</a>
        </li>
      </ul>
    </div>
  </div>


    </div><!-- ./.frame-meta -->

    <div class="frames">
      <div class="frame" data-permalink-url="/jonnyreeves/jquery-Mustache/blob/9b04e360b9718cde04f2f4c5b36f507303bce575/jquery.mustache.js" data-title="jquery-Mustache/jquery.mustache.js at v0.2.7 · jonnyreeves/jquery-Mustache · GitHub" data-type="blob">

        <div id="files" class="bubble">
          <div class="file">
            <div class="meta">
              <div class="info">
                <span class="icon"><b class="octicon octicon-file-text"></b></span>
                <span class="mode" title="File Mode">file</span>
                  <span>213 lines (188 sloc)</span>
                <span>6.671 kb</span>
              </div>
              <div class="actions">
                <div class="button-group">
                      <a class="minibutton js-entice" href=""
                         data-entice="You must be signed in and on a branch to make or propose changes">Edit</a>
                  <a href="/jonnyreeves/jquery-Mustache/raw/v0.2.7/jquery.mustache.js" class="button minibutton " id="raw-url">Raw</a>
                    <a href="/jonnyreeves/jquery-Mustache/blame/v0.2.7/jquery.mustache.js" class="button minibutton ">Blame</a>
                  <a href="/jonnyreeves/jquery-Mustache/commits/v0.2.7/jquery.mustache.js" class="button minibutton " rel="nofollow">History</a>
                </div><!-- /.button-group -->
              </div><!-- /.actions -->

            </div>
                <div class="blob-wrapper data type-javascript js-blob-data">
      <table class="file-code file-diff">
        <tr class="file-code-line">
          <td class="blob-line-nums">
            <span id="L1" rel="#L1">1</span>
<span id="L2" rel="#L2">2</span>
<span id="L3" rel="#L3">3</span>
<span id="L4" rel="#L4">4</span>
<span id="L5" rel="#L5">5</span>
<span id="L6" rel="#L6">6</span>
<span id="L7" rel="#L7">7</span>
<span id="L8" rel="#L8">8</span>
<span id="L9" rel="#L9">9</span>
<span id="L10" rel="#L10">10</span>
<span id="L11" rel="#L11">11</span>
<span id="L12" rel="#L12">12</span>
<span id="L13" rel="#L13">13</span>
<span id="L14" rel="#L14">14</span>
<span id="L15" rel="#L15">15</span>
<span id="L16" rel="#L16">16</span>
<span id="L17" rel="#L17">17</span>
<span id="L18" rel="#L18">18</span>
<span id="L19" rel="#L19">19</span>
<span id="L20" rel="#L20">20</span>
<span id="L21" rel="#L21">21</span>
<span id="L22" rel="#L22">22</span>
<span id="L23" rel="#L23">23</span>
<span id="L24" rel="#L24">24</span>
<span id="L25" rel="#L25">25</span>
<span id="L26" rel="#L26">26</span>
<span id="L27" rel="#L27">27</span>
<span id="L28" rel="#L28">28</span>
<span id="L29" rel="#L29">29</span>
<span id="L30" rel="#L30">30</span>
<span id="L31" rel="#L31">31</span>
<span id="L32" rel="#L32">32</span>
<span id="L33" rel="#L33">33</span>
<span id="L34" rel="#L34">34</span>
<span id="L35" rel="#L35">35</span>
<span id="L36" rel="#L36">36</span>
<span id="L37" rel="#L37">37</span>
<span id="L38" rel="#L38">38</span>
<span id="L39" rel="#L39">39</span>
<span id="L40" rel="#L40">40</span>
<span id="L41" rel="#L41">41</span>
<span id="L42" rel="#L42">42</span>
<span id="L43" rel="#L43">43</span>
<span id="L44" rel="#L44">44</span>
<span id="L45" rel="#L45">45</span>
<span id="L46" rel="#L46">46</span>
<span id="L47" rel="#L47">47</span>
<span id="L48" rel="#L48">48</span>
<span id="L49" rel="#L49">49</span>
<span id="L50" rel="#L50">50</span>
<span id="L51" rel="#L51">51</span>
<span id="L52" rel="#L52">52</span>
<span id="L53" rel="#L53">53</span>
<span id="L54" rel="#L54">54</span>
<span id="L55" rel="#L55">55</span>
<span id="L56" rel="#L56">56</span>
<span id="L57" rel="#L57">57</span>
<span id="L58" rel="#L58">58</span>
<span id="L59" rel="#L59">59</span>
<span id="L60" rel="#L60">60</span>
<span id="L61" rel="#L61">61</span>
<span id="L62" rel="#L62">62</span>
<span id="L63" rel="#L63">63</span>
<span id="L64" rel="#L64">64</span>
<span id="L65" rel="#L65">65</span>
<span id="L66" rel="#L66">66</span>
<span id="L67" rel="#L67">67</span>
<span id="L68" rel="#L68">68</span>
<span id="L69" rel="#L69">69</span>
<span id="L70" rel="#L70">70</span>
<span id="L71" rel="#L71">71</span>
<span id="L72" rel="#L72">72</span>
<span id="L73" rel="#L73">73</span>
<span id="L74" rel="#L74">74</span>
<span id="L75" rel="#L75">75</span>
<span id="L76" rel="#L76">76</span>
<span id="L77" rel="#L77">77</span>
<span id="L78" rel="#L78">78</span>
<span id="L79" rel="#L79">79</span>
<span id="L80" rel="#L80">80</span>
<span id="L81" rel="#L81">81</span>
<span id="L82" rel="#L82">82</span>
<span id="L83" rel="#L83">83</span>
<span id="L84" rel="#L84">84</span>
<span id="L85" rel="#L85">85</span>
<span id="L86" rel="#L86">86</span>
<span id="L87" rel="#L87">87</span>
<span id="L88" rel="#L88">88</span>
<span id="L89" rel="#L89">89</span>
<span id="L90" rel="#L90">90</span>
<span id="L91" rel="#L91">91</span>
<span id="L92" rel="#L92">92</span>
<span id="L93" rel="#L93">93</span>
<span id="L94" rel="#L94">94</span>
<span id="L95" rel="#L95">95</span>
<span id="L96" rel="#L96">96</span>
<span id="L97" rel="#L97">97</span>
<span id="L98" rel="#L98">98</span>
<span id="L99" rel="#L99">99</span>
<span id="L100" rel="#L100">100</span>
<span id="L101" rel="#L101">101</span>
<span id="L102" rel="#L102">102</span>
<span id="L103" rel="#L103">103</span>
<span id="L104" rel="#L104">104</span>
<span id="L105" rel="#L105">105</span>
<span id="L106" rel="#L106">106</span>
<span id="L107" rel="#L107">107</span>
<span id="L108" rel="#L108">108</span>
<span id="L109" rel="#L109">109</span>
<span id="L110" rel="#L110">110</span>
<span id="L111" rel="#L111">111</span>
<span id="L112" rel="#L112">112</span>
<span id="L113" rel="#L113">113</span>
<span id="L114" rel="#L114">114</span>
<span id="L115" rel="#L115">115</span>
<span id="L116" rel="#L116">116</span>
<span id="L117" rel="#L117">117</span>
<span id="L118" rel="#L118">118</span>
<span id="L119" rel="#L119">119</span>
<span id="L120" rel="#L120">120</span>
<span id="L121" rel="#L121">121</span>
<span id="L122" rel="#L122">122</span>
<span id="L123" rel="#L123">123</span>
<span id="L124" rel="#L124">124</span>
<span id="L125" rel="#L125">125</span>
<span id="L126" rel="#L126">126</span>
<span id="L127" rel="#L127">127</span>
<span id="L128" rel="#L128">128</span>
<span id="L129" rel="#L129">129</span>
<span id="L130" rel="#L130">130</span>
<span id="L131" rel="#L131">131</span>
<span id="L132" rel="#L132">132</span>
<span id="L133" rel="#L133">133</span>
<span id="L134" rel="#L134">134</span>
<span id="L135" rel="#L135">135</span>
<span id="L136" rel="#L136">136</span>
<span id="L137" rel="#L137">137</span>
<span id="L138" rel="#L138">138</span>
<span id="L139" rel="#L139">139</span>
<span id="L140" rel="#L140">140</span>
<span id="L141" rel="#L141">141</span>
<span id="L142" rel="#L142">142</span>
<span id="L143" rel="#L143">143</span>
<span id="L144" rel="#L144">144</span>
<span id="L145" rel="#L145">145</span>
<span id="L146" rel="#L146">146</span>
<span id="L147" rel="#L147">147</span>
<span id="L148" rel="#L148">148</span>
<span id="L149" rel="#L149">149</span>
<span id="L150" rel="#L150">150</span>
<span id="L151" rel="#L151">151</span>
<span id="L152" rel="#L152">152</span>
<span id="L153" rel="#L153">153</span>
<span id="L154" rel="#L154">154</span>
<span id="L155" rel="#L155">155</span>
<span id="L156" rel="#L156">156</span>
<span id="L157" rel="#L157">157</span>
<span id="L158" rel="#L158">158</span>
<span id="L159" rel="#L159">159</span>
<span id="L160" rel="#L160">160</span>
<span id="L161" rel="#L161">161</span>
<span id="L162" rel="#L162">162</span>
<span id="L163" rel="#L163">163</span>
<span id="L164" rel="#L164">164</span>
<span id="L165" rel="#L165">165</span>
<span id="L166" rel="#L166">166</span>
<span id="L167" rel="#L167">167</span>
<span id="L168" rel="#L168">168</span>
<span id="L169" rel="#L169">169</span>
<span id="L170" rel="#L170">170</span>
<span id="L171" rel="#L171">171</span>
<span id="L172" rel="#L172">172</span>
<span id="L173" rel="#L173">173</span>
<span id="L174" rel="#L174">174</span>
<span id="L175" rel="#L175">175</span>
<span id="L176" rel="#L176">176</span>
<span id="L177" rel="#L177">177</span>
<span id="L178" rel="#L178">178</span>
<span id="L179" rel="#L179">179</span>
<span id="L180" rel="#L180">180</span>
<span id="L181" rel="#L181">181</span>
<span id="L182" rel="#L182">182</span>
<span id="L183" rel="#L183">183</span>
<span id="L184" rel="#L184">184</span>
<span id="L185" rel="#L185">185</span>
<span id="L186" rel="#L186">186</span>
<span id="L187" rel="#L187">187</span>
<span id="L188" rel="#L188">188</span>
<span id="L189" rel="#L189">189</span>
<span id="L190" rel="#L190">190</span>
<span id="L191" rel="#L191">191</span>
<span id="L192" rel="#L192">192</span>
<span id="L193" rel="#L193">193</span>
<span id="L194" rel="#L194">194</span>
<span id="L195" rel="#L195">195</span>
<span id="L196" rel="#L196">196</span>
<span id="L197" rel="#L197">197</span>
<span id="L198" rel="#L198">198</span>
<span id="L199" rel="#L199">199</span>
<span id="L200" rel="#L200">200</span>
<span id="L201" rel="#L201">201</span>
<span id="L202" rel="#L202">202</span>
<span id="L203" rel="#L203">203</span>
<span id="L204" rel="#L204">204</span>
<span id="L205" rel="#L205">205</span>
<span id="L206" rel="#L206">206</span>
<span id="L207" rel="#L207">207</span>
<span id="L208" rel="#L208">208</span>
<span id="L209" rel="#L209">209</span>
<span id="L210" rel="#L210">210</span>
<span id="L211" rel="#L211">211</span>
<span id="L212" rel="#L212">212</span>
<span id="L213" rel="#L213">213</span>

          </td>
          <td class="blob-line-code">
                  <div class="highlight"><pre><div class='line' id='LC1'><span class="cm">/*! jQuery Mustache - v0.2.7 - 2013-01-30</span></div><div class='line' id='LC2'><span class="cm">* https://github.com/jonnyreeves/jquery-Mustache</span></div><div class='line' id='LC3'><span class="cm">* Copyright (c) 2013 Jonny Reeves; Licensed MIT */</span></div><div class='line' id='LC4'><br/></div><div class='line' id='LC5'><span class="cm">/*global jQuery, window */</span></div><div class='line' id='LC6'><span class="p">(</span><span class="kd">function</span> <span class="p">(</span><span class="nx">$</span><span class="p">,</span> <span class="nb">window</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC7'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;use strict&#39;</span><span class="p">;</span></div><div class='line' id='LC8'><br/></div><div class='line' id='LC9'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">templateMap</span> <span class="o">=</span> <span class="p">{},</span></div><div class='line' id='LC10'>		<span class="nx">instance</span> <span class="o">=</span> <span class="kc">null</span><span class="p">,</span></div><div class='line' id='LC11'>		<span class="nx">options</span> <span class="o">=</span> <span class="p">{</span></div><div class='line' id='LC12'>			<span class="c1">// Should an error be thrown if an attempt is made to render a non-existent template.  If false, the</span></div><div class='line' id='LC13'>			<span class="c1">// operation will fail silently.</span></div><div class='line' id='LC14'>			<span class="nx">warnOnMissingTemplates</span><span class="o">:</span> <span class="kc">false</span><span class="p">,</span></div><div class='line' id='LC15'><br/></div><div class='line' id='LC16'>			<span class="c1">// Should an error be thrown if an attempt is made to overwrite a template which has already been added.</span></div><div class='line' id='LC17'>			<span class="c1">// If true the original template will be overwritten with the new value.</span></div><div class='line' id='LC18'>			<span class="nx">allowOverwrite</span><span class="o">:</span> <span class="kc">true</span><span class="p">,</span></div><div class='line' id='LC19'><br/></div><div class='line' id='LC20'>			<span class="c1">// The &#39;type&#39; attribute which you use to denoate a Mustache Template in the DOM; eg:</span></div><div class='line' id='LC21'>			<span class="c1">// `&lt;script type=&quot;text/html&quot; id=&quot;my-template&quot;&gt;&lt;/script&gt;`</span></div><div class='line' id='LC22'>			<span class="nx">domTemplateType</span><span class="o">:</span> <span class="s1">&#39;text/html&#39;</span><span class="p">,</span></div><div class='line' id='LC23'><br/></div><div class='line' id='LC24'>			<span class="c1">// Specifies the `dataType` attribute used when external templates are loaded.</span></div><div class='line' id='LC25'>			<span class="nx">externalTemplateDataType</span><span class="o">:</span> <span class="s1">&#39;text&#39;</span></div><div class='line' id='LC26'>		<span class="p">};</span></div><div class='line' id='LC27'><br/></div><div class='line' id='LC28'>	<span class="kd">function</span> <span class="nx">getMustache</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC29'>		<span class="c1">// Lazily retrieve Mustache from the window global if it hasn&#39;t been defined by</span></div><div class='line' id='LC30'>		<span class="c1">// the User.</span></div><div class='line' id='LC31'>		<span class="k">if</span> <span class="p">(</span><span class="nx">instance</span> <span class="o">===</span> <span class="kc">null</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC32'>			<span class="nx">instance</span> <span class="o">=</span> <span class="nb">window</span><span class="p">.</span><span class="nx">Mustache</span><span class="p">;</span></div><div class='line' id='LC33'>			<span class="k">if</span> <span class="p">(</span><span class="nx">instance</span> <span class="o">===</span> <span class="k">void</span> <span class="mi">0</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC34'>				<span class="nx">$</span><span class="p">.</span><span class="nx">error</span><span class="p">(</span><span class="s2">&quot;Failed to locate Mustache instance, are you sure it has been loaded?&quot;</span><span class="p">);</span></div><div class='line' id='LC35'>			<span class="p">}</span></div><div class='line' id='LC36'>		<span class="p">}</span></div><div class='line' id='LC37'>		<span class="k">return</span> <span class="nx">instance</span><span class="p">;</span></div><div class='line' id='LC38'>	<span class="p">}</span></div><div class='line' id='LC39'><br/></div><div class='line' id='LC40'>	<span class="cm">/**</span></div><div class='line' id='LC41'><span class="cm">	 * Returns true if the supplied templateName has been added.</span></div><div class='line' id='LC42'><span class="cm">	 */</span></div><div class='line' id='LC43'>	<span class="kd">function</span> <span class="nx">has</span><span class="p">(</span><span class="nx">templateName</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC44'>		<span class="k">return</span> <span class="nx">templateMap</span><span class="p">[</span><span class="nx">templateName</span><span class="p">]</span> <span class="o">!==</span> <span class="k">void</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC45'>	<span class="p">}</span></div><div class='line' id='LC46'><br/></div><div class='line' id='LC47'>	<span class="cm">/**</span></div><div class='line' id='LC48'><span class="cm">	 * Registers a template so that it can be used by $.Mustache.</span></div><div class='line' id='LC49'><span class="cm">	 *</span></div><div class='line' id='LC50'><span class="cm">	 * @param templateName		A name which uniquely identifies this template.</span></div><div class='line' id='LC51'><span class="cm">	 * @param templateHtml		The HTML which makes us the template; this will be rendered by Mustache when render()</span></div><div class='line' id='LC52'><span class="cm">	 *							is invoked.</span></div><div class='line' id='LC53'><span class="cm">	 * @throws					If options.allowOverwrite is false and the templateName has already been registered.</span></div><div class='line' id='LC54'><span class="cm">	 */</span></div><div class='line' id='LC55'>	<span class="kd">function</span> <span class="nx">add</span><span class="p">(</span><span class="nx">templateName</span><span class="p">,</span> <span class="nx">templateHtml</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC56'>		<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">options</span><span class="p">.</span><span class="nx">allowOverwrite</span> <span class="o">&amp;&amp;</span> <span class="nx">has</span><span class="p">(</span><span class="nx">templateName</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC57'>			<span class="nx">$</span><span class="p">.</span><span class="nx">error</span><span class="p">(</span><span class="s1">&#39;TemplateName: &#39;</span> <span class="o">+</span> <span class="nx">templateName</span> <span class="o">+</span> <span class="s1">&#39; is already mapped.&#39;</span><span class="p">);</span></div><div class='line' id='LC58'>			<span class="k">return</span><span class="p">;</span></div><div class='line' id='LC59'>		<span class="p">}</span></div><div class='line' id='LC60'>		<span class="nx">templateMap</span><span class="p">[</span><span class="nx">templateName</span><span class="p">]</span> <span class="o">=</span> <span class="nx">$</span><span class="p">.</span><span class="nx">trim</span><span class="p">(</span><span class="nx">templateHtml</span><span class="p">);</span></div><div class='line' id='LC61'>	<span class="p">}</span></div><div class='line' id='LC62'><br/></div><div class='line' id='LC63'>	<span class="cm">/**</span></div><div class='line' id='LC64'><span class="cm">	 * Adds one or more tempaltes from the DOM using either the supplied templateElementIds or by retrieving all script</span></div><div class='line' id='LC65'><span class="cm">	 * tags of the &#39;domTemplateType&#39;.  Templates added in this fashion will be registered with their elementId value.</span></div><div class='line' id='LC66'><span class="cm">	 *</span></div><div class='line' id='LC67'><span class="cm">	 * @param [...templateElementIds]	List of element id&#39;s present on the DOM which contain templates to be added; </span></div><div class='line' id='LC68'><span class="cm">	 *									if none are supplied all script tags that are of the same type as the </span></div><div class='line' id='LC69'><span class="cm">	 *									`options.domTemplateType` configuration value will be added.</span></div><div class='line' id='LC70'><span class="cm">	 */</span></div><div class='line' id='LC71'>	<span class="kd">function</span> <span class="nx">addFromDom</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC72'>		<span class="kd">var</span> <span class="nx">templateElementIds</span><span class="p">;</span></div><div class='line' id='LC73'><br/></div><div class='line' id='LC74'>		<span class="c1">// If no args are supplied, all script blocks will be read from the document.</span></div><div class='line' id='LC75'>		<span class="k">if</span> <span class="p">(</span><span class="nx">arguments</span><span class="p">.</span><span class="nx">length</span> <span class="o">===</span> <span class="mi">0</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC76'>			<span class="nx">templateElementIds</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="s1">&#39;script[type=&quot;&#39;</span> <span class="o">+</span> <span class="nx">options</span><span class="p">.</span><span class="nx">domTemplateType</span> <span class="o">+</span> <span class="s1">&#39;&quot;]&#39;</span><span class="p">).</span><span class="nx">map</span><span class="p">(</span><span class="kd">function</span> <span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC77'>				<span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">id</span><span class="p">;</span></div><div class='line' id='LC78'>			<span class="p">});</span></div><div class='line' id='LC79'>		<span class="p">}</span></div><div class='line' id='LC80'>		<span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC81'>			<span class="nx">templateElementIds</span> <span class="o">=</span> <span class="nx">$</span><span class="p">.</span><span class="nx">makeArray</span><span class="p">(</span><span class="nx">arguments</span><span class="p">);</span></div><div class='line' id='LC82'>		<span class="p">}</span></div><div class='line' id='LC83'><br/></div><div class='line' id='LC84'>		<span class="nx">$</span><span class="p">.</span><span class="nx">each</span><span class="p">(</span><span class="nx">templateElementIds</span><span class="p">,</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC85'>			<span class="kd">var</span> <span class="nx">templateElement</span> <span class="o">=</span> <span class="nb">document</span><span class="p">.</span><span class="nx">getElementById</span><span class="p">(</span><span class="k">this</span><span class="p">);</span></div><div class='line' id='LC86'><br/></div><div class='line' id='LC87'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">templateElement</span> <span class="o">===</span> <span class="kc">null</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC88'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$</span><span class="p">.</span><span class="nx">error</span><span class="p">(</span><span class="s1">&#39;No such elementId: #&#39;</span> <span class="o">+</span> <span class="k">this</span><span class="p">);</span></div><div class='line' id='LC89'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC90'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC91'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">add</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="nx">$</span><span class="p">(</span><span class="nx">templateElement</span><span class="p">).</span><span class="nx">html</span><span class="p">());</span></div><div class='line' id='LC92'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC93'>		<span class="p">});</span></div><div class='line' id='LC94'>	<span class="p">}</span></div><div class='line' id='LC95'><br/></div><div class='line' id='LC96'>	<span class="cm">/**</span></div><div class='line' id='LC97'><span class="cm">	 * Removes a template, the contents of the removed Template will be returned.</span></div><div class='line' id='LC98'><span class="cm">	 *</span></div><div class='line' id='LC99'><span class="cm">	 * @param templateName		The name of the previously registered Mustache template that you wish to remove.</span></div><div class='line' id='LC100'><span class="cm">	 * @returns					String which represents the raw content of the template.</span></div><div class='line' id='LC101'><span class="cm">	 */</span></div><div class='line' id='LC102'>	<span class="kd">function</span> <span class="nx">remove</span><span class="p">(</span><span class="nx">templateName</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC103'>		<span class="kd">var</span> <span class="nx">result</span> <span class="o">=</span> <span class="nx">templateMap</span><span class="p">[</span><span class="nx">templateName</span><span class="p">];</span></div><div class='line' id='LC104'>		<span class="k">delete</span> <span class="nx">templateMap</span><span class="p">[</span><span class="nx">templateName</span><span class="p">];</span></div><div class='line' id='LC105'>		<span class="k">return</span> <span class="nx">result</span><span class="p">;</span></div><div class='line' id='LC106'>	<span class="p">}</span></div><div class='line' id='LC107'><br/></div><div class='line' id='LC108'>	<span class="cm">/**</span></div><div class='line' id='LC109'><span class="cm">	 * Removes all templates and tells Mustache to flush its cache.</span></div><div class='line' id='LC110'><span class="cm">	 */</span></div><div class='line' id='LC111'>	<span class="kd">function</span> <span class="nx">clear</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC112'>		<span class="nx">templateMap</span> <span class="o">=</span> <span class="p">{};</span></div><div class='line' id='LC113'>		<span class="nx">getMustache</span><span class="p">().</span><span class="nx">clearCache</span><span class="p">();</span></div><div class='line' id='LC114'>	<span class="p">}</span></div><div class='line' id='LC115'><br/></div><div class='line' id='LC116'>	<span class="cm">/**</span></div><div class='line' id='LC117'><span class="cm">	 * Renders a previously added Mustache template using the supplied templateData object.  Note if the supplied</span></div><div class='line' id='LC118'><span class="cm">	 * templateName doesn&#39;t exist an empty String will be returned.</span></div><div class='line' id='LC119'><span class="cm">	 */</span></div><div class='line' id='LC120'>	<span class="kd">function</span> <span class="nx">render</span><span class="p">(</span><span class="nx">templateName</span><span class="p">,</span> <span class="nx">templateData</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC121'>		<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">has</span><span class="p">(</span><span class="nx">templateName</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC122'>			<span class="k">if</span> <span class="p">(</span><span class="nx">options</span><span class="p">.</span><span class="nx">warnOnMissingTemplates</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC123'>				<span class="nx">$</span><span class="p">.</span><span class="nx">error</span><span class="p">(</span><span class="s1">&#39;No template registered for: &#39;</span> <span class="o">+</span> <span class="nx">templateName</span><span class="p">);</span></div><div class='line' id='LC124'>			<span class="p">}</span></div><div class='line' id='LC125'>			<span class="k">return</span> <span class="s1">&#39;&#39;</span><span class="p">;</span></div><div class='line' id='LC126'>		<span class="p">}</span></div><div class='line' id='LC127'>		<span class="k">return</span> <span class="nx">getMustache</span><span class="p">().</span><span class="nx">to_html</span><span class="p">(</span><span class="nx">templateMap</span><span class="p">[</span><span class="nx">templateName</span><span class="p">],</span> <span class="nx">templateData</span><span class="p">,</span> <span class="nx">templateMap</span><span class="p">);</span></div><div class='line' id='LC128'>	<span class="p">}</span></div><div class='line' id='LC129'><br/></div><div class='line' id='LC130'>	<span class="cm">/**</span></div><div class='line' id='LC131'><span class="cm">	 * Loads the external Mustache templates located at the supplied URL and registers them for later use.  This method</span></div><div class='line' id='LC132'><span class="cm">	 * returns a jQuery Promise and also support an `onComplete` callback.</span></div><div class='line' id='LC133'><span class="cm">	 *</span></div><div class='line' id='LC134'><span class="cm">	 * @param url			URL of the external Mustache template file to load.</span></div><div class='line' id='LC135'><span class="cm">	 * @param onComplete	Optional callback function which will be invoked when the templates from the supplied URL</span></div><div class='line' id='LC136'><span class="cm">	 *						have been loaded and are ready for use.</span></div><div class='line' id='LC137'><span class="cm">	 * @returns				jQuery deferred promise which will complete when the templates have been loaded and are</span></div><div class='line' id='LC138'><span class="cm">	 *						ready for use.</span></div><div class='line' id='LC139'><span class="cm">	 */</span></div><div class='line' id='LC140'>	<span class="kd">function</span> <span class="nx">load</span><span class="p">(</span><span class="nx">url</span><span class="p">,</span> <span class="nx">onComplete</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC141'>		<span class="k">return</span> <span class="nx">$</span><span class="p">.</span><span class="nx">ajax</span><span class="p">({</span></div><div class='line' id='LC142'>				<span class="nx">url</span><span class="o">:</span> <span class="nx">url</span><span class="p">,</span></div><div class='line' id='LC143'>				<span class="nx">dataType</span><span class="o">:</span> <span class="nx">options</span><span class="p">.</span><span class="nx">externalTemplateDataType</span></div><div class='line' id='LC144'>			<span class="p">}).</span><span class="nx">done</span><span class="p">(</span><span class="kd">function</span> <span class="p">(</span><span class="nx">templates</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC145'>				<span class="nx">$</span><span class="p">(</span><span class="nx">templates</span><span class="p">).</span><span class="nx">filter</span><span class="p">(</span><span class="s1">&#39;script&#39;</span><span class="p">).</span><span class="nx">each</span><span class="p">(</span><span class="kd">function</span> <span class="p">(</span><span class="nx">i</span><span class="p">,</span> <span class="nx">el</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC146'>					<span class="nx">add</span><span class="p">(</span><span class="nx">el</span><span class="p">.</span><span class="nx">id</span><span class="p">,</span> <span class="nx">$</span><span class="p">(</span><span class="nx">el</span><span class="p">).</span><span class="nx">html</span><span class="p">());</span></div><div class='line' id='LC147'>				<span class="p">});</span></div><div class='line' id='LC148'><br/></div><div class='line' id='LC149'>				<span class="k">if</span> <span class="p">(</span><span class="nx">$</span><span class="p">.</span><span class="nx">isFunction</span><span class="p">(</span><span class="nx">onComplete</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC150'>					<span class="nx">onComplete</span><span class="p">();</span></div><div class='line' id='LC151'>				<span class="p">}</span></div><div class='line' id='LC152'>			<span class="p">});</span></div><div class='line' id='LC153'>	<span class="p">}</span></div><div class='line' id='LC154'><br/></div><div class='line' id='LC155'>	<span class="cm">/**</span></div><div class='line' id='LC156'><span class="cm">	 * Returns an Array of templateNames which have been registered and can be retrieved via</span></div><div class='line' id='LC157'><span class="cm">	 * $.Mustache.render() or $(element).mustache().</span></div><div class='line' id='LC158'><span class="cm">	 */</span></div><div class='line' id='LC159'>	<span class="kd">function</span> <span class="nx">templates</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC160'>		<span class="k">return</span> <span class="nx">$</span><span class="p">.</span><span class="nx">map</span><span class="p">(</span><span class="nx">templateMap</span><span class="p">,</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">value</span><span class="p">,</span> <span class="nx">key</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC161'>			<span class="k">return</span> <span class="nx">key</span><span class="p">;</span></div><div class='line' id='LC162'>		<span class="p">});</span></div><div class='line' id='LC163'>	<span class="p">}</span></div><div class='line' id='LC164'><br/></div><div class='line' id='LC165'>	<span class="c1">// Expose the public methods on jQuery.Mustache</span></div><div class='line' id='LC166'>	<span class="nx">$</span><span class="p">.</span><span class="nx">Mustache</span> <span class="o">=</span> <span class="p">{</span></div><div class='line' id='LC167'>		<span class="nx">options</span><span class="o">:</span> <span class="nx">options</span><span class="p">,</span></div><div class='line' id='LC168'>		<span class="nx">load</span><span class="o">:</span> <span class="nx">load</span><span class="p">,</span></div><div class='line' id='LC169'>		<span class="nx">add</span><span class="o">:</span> <span class="nx">add</span><span class="p">,</span></div><div class='line' id='LC170'>		<span class="nx">addFromDom</span><span class="o">:</span> <span class="nx">addFromDom</span><span class="p">,</span></div><div class='line' id='LC171'>		<span class="nx">remove</span><span class="o">:</span> <span class="nx">remove</span><span class="p">,</span></div><div class='line' id='LC172'>		<span class="nx">clear</span><span class="o">:</span> <span class="nx">clear</span><span class="p">,</span></div><div class='line' id='LC173'>		<span class="nx">render</span><span class="o">:</span> <span class="nx">render</span><span class="p">,</span></div><div class='line' id='LC174'>		<span class="nx">templates</span><span class="o">:</span> <span class="nx">templates</span><span class="p">,</span></div><div class='line' id='LC175'>		<span class="nx">instance</span><span class="o">:</span> <span class="nx">instance</span></div><div class='line' id='LC176'>	<span class="p">};</span></div><div class='line' id='LC177'><br/></div><div class='line' id='LC178'>	<span class="cm">/**</span></div><div class='line' id='LC179'><span class="cm">	 * Renders one or more viewModels into the current jQuery element.</span></div><div class='line' id='LC180'><span class="cm">	 *</span></div><div class='line' id='LC181'><span class="cm">	 * @param templateName	The name of the Mustache template you wish to render, Note that the</span></div><div class='line' id='LC182'><span class="cm">	 *						template must have been previously loaded and / or added.</span></div><div class='line' id='LC183'><span class="cm">	 * @param templateData	One or more JavaScript objects which will be used to render the Mustache</span></div><div class='line' id='LC184'><span class="cm">	 *						template.</span></div><div class='line' id='LC185'><span class="cm">	 * @param options.method	jQuery method to use when rendering, defaults to &#39;append&#39;.</span></div><div class='line' id='LC186'><span class="cm">	 */</span></div><div class='line' id='LC187'>	<span class="nx">$</span><span class="p">.</span><span class="nx">fn</span><span class="p">.</span><span class="nx">mustache</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">templateName</span><span class="p">,</span> <span class="nx">templateData</span><span class="p">,</span> <span class="nx">options</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC188'>		<span class="kd">var</span> <span class="nx">settings</span> <span class="o">=</span> <span class="nx">$</span><span class="p">.</span><span class="nx">extend</span><span class="p">({</span></div><div class='line' id='LC189'>			<span class="nx">method</span><span class="o">:</span>	<span class="s1">&#39;append&#39;</span></div><div class='line' id='LC190'>		<span class="p">},</span> <span class="nx">options</span><span class="p">);</span></div><div class='line' id='LC191'><br/></div><div class='line' id='LC192'>		<span class="kd">var</span> <span class="nx">renderTemplate</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="nx">viewModel</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC193'>			<span class="nx">$</span><span class="p">(</span><span class="nx">obj</span><span class="p">)[</span><span class="nx">settings</span><span class="p">.</span><span class="nx">method</span><span class="p">](</span><span class="nx">render</span><span class="p">(</span><span class="nx">templateName</span><span class="p">,</span> <span class="nx">viewModel</span><span class="p">));</span></div><div class='line' id='LC194'>		<span class="p">};</span></div><div class='line' id='LC195'><br/></div><div class='line' id='LC196'>		<span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">each</span><span class="p">(</span><span class="kd">function</span> <span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC197'>			<span class="kd">var</span> <span class="nx">element</span> <span class="o">=</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC198'><br/></div><div class='line' id='LC199'>			<span class="c1">// Render a collection of viewModels.</span></div><div class='line' id='LC200'>			<span class="k">if</span> <span class="p">(</span><span class="nx">$</span><span class="p">.</span><span class="nx">isArray</span><span class="p">(</span><span class="nx">templateData</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC201'>				<span class="nx">$</span><span class="p">.</span><span class="nx">each</span><span class="p">(</span><span class="nx">templateData</span><span class="p">,</span> <span class="kd">function</span> <span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC202'>					<span class="nx">renderTemplate</span><span class="p">(</span><span class="nx">element</span><span class="p">,</span> <span class="k">this</span><span class="p">);</span></div><div class='line' id='LC203'>				<span class="p">});</span></div><div class='line' id='LC204'>			<span class="p">}</span></div><div class='line' id='LC205'><br/></div><div class='line' id='LC206'>			<span class="c1">// Render a single viewModel.</span></div><div class='line' id='LC207'>			<span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC208'>				<span class="nx">renderTemplate</span><span class="p">(</span><span class="nx">element</span><span class="p">,</span> <span class="nx">templateData</span><span class="p">);</span></div><div class='line' id='LC209'>			<span class="p">}</span></div><div class='line' id='LC210'>		<span class="p">});</span></div><div class='line' id='LC211'>	<span class="p">};</span></div><div class='line' id='LC212'><br/></div><div class='line' id='LC213'><span class="p">}(</span><span class="nx">jQuery</span><span class="p">,</span> <span class="nb">window</span><span class="p">));</span></div></pre></div>
          </td>
        </tr>
      </table>
  </div>

          </div>
        </div>

        <a href="#jump-to-line" rel="facebox[.linejump]" data-hotkey="l" class="js-jump-to-line" style="display:none">Jump to Line</a>
        <div id="jump-to-line" style="display:none">
          <form accept-charset="UTF-8" class="js-jump-to-line-form">
            <input class="linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;">
            <button type="submit" class="button">Go</button>
          </form>
        </div>

      </div>
    </div>
</div>

<div id="js-frame-loading-template" class="frame frame-loading large-loading-area" style="display:none;">
  <img class="js-frame-loading-spinner" src="https://a248.e.akamai.net/assets.github.com/images/spinners/octocat-spinner-128.gif" height="64" width="64">
</div>


        </div>
      </div>
      <div class="modal-backdrop"></div>
    </div>

      <div id="footer-push"></div><!-- hack for sticky footer -->
    </div><!-- end of wrapper - hack for sticky footer -->

      <!-- footer -->
      <div id="footer">
  <div class="container clearfix">

      <dl class="footer_nav">
        <dt>GitHub</dt>
        <dd><a href="/about">About us</a></dd>
        <dd><a href="/blog">Blog</a></dd>
        <dd><a href="/contact">Contact &amp; support</a></dd>
        <dd><a href="http://enterprise.github.com/">GitHub Enterprise</a></dd>
        <dd><a href="http://status.github.com/">Site status</a></dd>
      </dl>

      <dl class="footer_nav">
        <dt>Applications</dt>
        <dd><a href="http://mac.github.com/">GitHub for Mac</a></dd>
        <dd><a href="http://windows.github.com/">GitHub for Windows</a></dd>
        <dd><a href="http://eclipse.github.com/">GitHub for Eclipse</a></dd>
        <dd><a href="http://mobile.github.com/">GitHub mobile apps</a></dd>
      </dl>

      <dl class="footer_nav">
        <dt>Services</dt>
        <dd><a href="http://get.gaug.es/">Gauges: Web analytics</a></dd>
        <dd><a href="http://speakerdeck.com">Speaker Deck: Presentations</a></dd>
        <dd><a href="https://gist.github.com">Gist: Code snippets</a></dd>
        <dd><a href="http://jobs.github.com/">Job board</a></dd>
      </dl>

      <dl class="footer_nav">
        <dt>Documentation</dt>
        <dd><a href="http://help.github.com/">GitHub Help</a></dd>
        <dd><a href="http://developer.github.com/">Developer API</a></dd>
        <dd><a href="http://github.github.com/github-flavored-markdown/">GitHub Flavored Markdown</a></dd>
        <dd><a href="http://pages.github.com/">GitHub Pages</a></dd>
      </dl>

      <dl class="footer_nav">
        <dt>More</dt>
        <dd><a href="http://training.github.com/">Training</a></dd>
        <dd><a href="/edu">Students &amp; teachers</a></dd>
        <dd><a href="http://shop.github.com">The Shop</a></dd>
        <dd><a href="/plans">Plans &amp; pricing</a></dd>
        <dd><a href="http://octodex.github.com/">The Octodex</a></dd>
      </dl>

      <hr class="footer-divider">


    <p class="right">&copy; 2013 <span title="0.04669s from fe4.rs.github.com">GitHub</span>, Inc. All rights reserved.</p>
    <a class="left" href="/">
      <span class="mega-octicon octicon-mark-github"></span>
    </a>
    <ul id="legal">
        <li><a href="/site/terms">Terms of Service</a></li>
        <li><a href="/site/privacy">Privacy</a></li>
        <li><a href="/security">Security</a></li>
    </ul>

  </div><!-- /.container -->

</div><!-- /.#footer -->


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-fullscreen-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="js-fullscreen-contents" placeholder="" data-suggester="fullscreen_suggester"></textarea>
          <div class="suggester-container">
              <div class="suggester fullscreen-suggester js-navigation-container" id="fullscreen_suggester"
                 data-url="/jonnyreeves/jquery-Mustache/suggestions/commit">
              </div>
          </div>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped leftwards" title="Exit Zen Mode">
      <span class="mega-octicon octicon-screen-normal"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped leftwards"
      title="Switch themes">
      <span class="octicon octicon-color-mode"></span>
    </a>
  </div>
</div>



    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      <a href="#" class="octicon octicon-remove-close close ajax-error-dismiss"></a>
      Something went wrong with that request. Please try again.
    </div>

    
    <span id='server_response_time' data-time='0.04705' data-host='fe4'></span>
    
  </body>
</html>

