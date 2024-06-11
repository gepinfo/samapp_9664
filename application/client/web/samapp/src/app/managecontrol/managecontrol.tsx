import "./managecontrol.scss";
import { Link } from 'react-router-dom';



const Control = ()=>{
    return(
        <div id="iuzatd" className="gpd-container gpd-cnt">
    <div id="iz6vo" className="gdp-row gpd-grid">
        <div id="iqtvt" className="cell gpd-clm">
            <div id="ighf" className="gdp-row gpd-grid sticky">
                <div id="ik48" className="cell gpd-clm">
                    <div id="icu6h" className="gpd-text">Users Dashboard
                    </div>
                </div>

            </div>
            <div id="i937yi" className="gdp-row gpd-grid">
                <div id="i5wn7j" className="cell gpd-clm">
                    <div id="i8zcvg" className="gdp-row gpd-grid">
                        <div id="il2xxf" className="cell gpd-clm">
                            <div id="i4a9sf"  className="gpd-text">Manage Administration
                            </div>
                        </div>
                        <div className="cell gpd-clm">
                            <div id="ig75jo" className="gdp-row gpd-grid">
                                <div id="i0mp2f" className="cell gpd-clm">
                                    <div id="i652ij" className="gdp-row gpd-grid">

                                        <div id="iojftr" className="cell gpd-clm"><img src="https://cdn.grapedrop.com/uf9ef8595751c4d1f87c91168f5d51a8c/8c3c80b2b8bf47fe891dc0fef071b903_group_2885.png" id="we45hg" /> </div>
                                        <div id="ivdiuk" className="cell gpd-clm">
                                            <div id="ic8nue" className="gpd-text" > <Link style={{ textDecoration: 'none' }}  to='/usermanagement'>User</Link>
                                            </div>
                                            <div id="ifdjor" className="gpd-text">Management
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="i0mp2f" className="cell gpd-clm">
                                    <div id="i652ij" className="gdp-row gpd-grid">

                                        <div id="iojftr" className="cell gpd-clm"><img src="https://cdn.grapedrop.com/u5129d9550ab64e5a8a9dd4793644e5e7/e5c2c5860d5d4673880361f037a6a9c5_manager.png" id="we45hg" /> </div>
                                        <div id="ivdiuk" className="cell gpd-clm">
                                            <div id="ic8nue" className="gpd-text" ><Link style={{ textDecoration: 'none' }} to = '/authorization'>Authorization</Link>
                                            </div>
                                            <div id="ifdjor" className="gpd-text">Management
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="ic1ccr" className="cell gpd-clm">
                                    <div id="iemrh7" className="gdp-row gpd-grid">
                                        <div id="i7trrs" className="cell gpd-clm"><img src="https://cdn.grapedrop.com/u5129d9550ab64e5a8a9dd4793644e5e7/7e975b90da5e4b4e9139e8f62471b2f3_man.png" id="we45hg" /></div>
                                        <div id="ivt7k8" className="cell gpd-clm">
                                            <div id="ifs5g7" className="gpd-text" > <Link style={{ textDecoration: 'none' }} to='/manageroles'>Roles</Link>
                                            </div>
                                            <div id="iiq5zm" className="gpd-text">Management
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="i77jpi" className="cell gpd-clm">
                                    <div id="i12mn9" className="gdp-row gpd-grid">
                                        <div id="i7j9ef" className="cell gpd-clm"><img src="https://cdn.grapedrop.com/u5129d9550ab64e5a8a9dd4793644e5e7/980b760bbd8a4dab8d7b6ce0932e8bf1_settings.png" id="we45hg" /></div>
                                        <div id="i23znz" className="cell gpd-clm">
                                            <div id="i8c31a" className="gpd-text" ><Link style={{ textDecoration: 'none' }} to='/manageusers'>UsersRole</Link>
                                            </div>
                                            <div id="ilhgzk" className="gpd-text">Management
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    )
}

export default Control;