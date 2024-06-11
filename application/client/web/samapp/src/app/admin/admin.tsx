import React from "react";
import { Link } from "react-router-dom";
import "./admin.scss";

class Admin extends React.Component{
    render() {
        return (
            <div id="iuzatd" className="gpd-container gpd-cnt">
                <div id="iz6vo" className="gdp-row gpd-grid">
                    <div id="iqtvt" className="cell gpd-clm">
                        <div id="ighfd" className="gdp-row gpd-grid sticky">
                            <div id="ik48" className="cell gpd-clm">
                                <div id="icu6h" className="gpd-text">Admin Dashboard
                                </div>
                            </div>
                        
                        </div>
                        <div id="i937yi" className="gdp-row gpd-grid">
                            <div id="i5wn7j" className="cell gpd-clm">
                                <div id="i8zcvg" className="gdp-row gpd-grid">
                                    <div id="il2xxf" className="cell gpd-clm">
                                        <div id="i4a9sf" className="gpd-text">System Administration
                                        </div>
                                    </div>
                                    <div className="cell gpd-clm">
                                        <div id="ig75jo" className="gdp-row gpd-grid">
                                            <div id="i0mp2f" className="cell gpd-clm">
                                                <div id="i652ij" className="gdp-row gpd-grid">
                                                
                                                    <div id="iojftr" className="cell gpd-clm">
                                                        <img 
                                                            src="https://cdn.grapedrop.com/uf9ef8595751c4d1f87c91168f5d51a8c/8c3c80b2b8bf47fe891dc0fef071b903_group_2885.png" 
                                                            id="il96fe" /> 
                                                    </div>
                                                    <div id="ivdiuk" className="cell gpd-clm">
                                                        <div id="ic8nue" className="gpd-text">
                                                        <div id="i9imej" className="gpd-text"> <Link className="gdp-btn" to='/managecontrol'>user</Link></div>
                                                          </div>
                                                        <div id="ifdjor" className="gpd-text">Management
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div id="ic1ccr" className="cell gpd-clm">
                                                <div id="iemrh7" className="gdp-row gpd-grid">
                                                    <div id="i7trrs" className="cell gpd-clm"><img
                                                            src="https://cdn.grapedrop.com/uf9ef8595751c4d1f87c91168f5d51a8c/59864fc5225d4dbd98f7ff895e715fb6_vaul.png"
                                                            id="iu3vly" /></div>
                                                    <div id="ivt7k8" className="cell gpd-clm">
                                                        <div id="ifs5g7" className="gpd-text">Vault
                                                        </div>
                                                        <div id="iiq5zm" className="gpd-text">administration
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div id="i77jpi" className="cell gpd-clm">
                                                <div id="i12mn9" className="gdp-row gpd-grid">
                                                    <div id="i7j9ef" className="cell gpd-clm"><img
                                                            src="https://cdn.grapedrop.com/uf9ef8595751c4d1f87c91168f5d51a8c/fdcfc34e5c3d49b3bc609b3b1b0cd842_sec.png"
                                                            id="icw9hz" /></div>
                                                    <div id="i23znz" className="cell gpd-clm">
                                                        <div id="i8c31a" className="gpd-text">Security
                                                        </div>
                                                        <div id="ilhgzk" className="gpd-text">Manager
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
        );
    }
}

export default Admin;