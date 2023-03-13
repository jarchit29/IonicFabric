import React from "react";
import { IonAlert, IonPage, IonContent } from "@ionic/react";
import { App as app } from "@capacitor/app";
import { useSelector } from "react-redux";

const MoreRentDetails = (props) => {
    const rentDetails = useSelector((state) => state.ResponseFromPropertyDetails);
    
  return (
    <IonContent>
      <IonPage>
        <IonAlert
          isOpen={props.openModal}
          onDidDismiss={() => props.setOpenModal(false)}
          cssClass="popUp-more"
          header={`More rent details`}
          message={`
              <div class="w-100 border-t-1 mrd-pl0"> 
              <div class="row p-1">
              <div class="col-12">
                <div class="row p-1">
                  <div class="col-8">
                    <p class="font_14 ff_reg">Service charge</p>
                  </div>
                  <div class="col-4">
                    <p class="ff-reg pb-0 font_14 float-end">
                    £ ${rentDetails.moreRentDetails.serviceCharge}
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-12">
                <div class="row p-1">
                  <div class="col-8">
                    <p class="font_14 ff_reg">Other charge</p>
                  </div>
                  <div class="col-4">
                    <p class="ff-reg pb-0 font_14 float-end">
                    £ ${rentDetails.moreRentDetails.otherCharges}
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-12">
              <div class="row p-1">
                <div class="col-8">
                  <p class="font_14 ff_reg">Rent frequency</p>
                </div>
                <div class="col-4">
                  <p class="ff-reg pb-0 font_14 float-end">
                   ${rentDetails.moreRentDetails.rentFrequency}
                  </p>
                </div>
              </div>
            </div>

              <div class="col-12">
              <div class="row p-1">
                <div class="col-8">
                  <p class="font_14 ff_reg">Affordable rent amount</p>
                </div>
                <div class="col-4">
                  <p class="ff-reg pb-0 font_14 float-end">
                  £ ${rentDetails.moreRentDetails.affordableRentAmount}
                  </p>
                </div>
              </div>
            </div>
            <div class="col-12">
            <div class="row p-1">
              <div class="col-8">
                <p class="font_14 ff_reg">Affordable service charges </p>
              </div>
              <div class="col-4">
                <p class="ff-reg pb-0 font_14 float-end">
                £ ${rentDetails.moreRentDetails.affordableServiceCharges}
                </p>
              </div>
            </div>
          </div>
          <div class="col-12">
          <div class="row p-1">
            <div class="col-8">
              <p class="font_14 ff_reg">Affordable total rent</p>
            </div>
            <div class="col-4">
              <p class="ff-reg pb-0 font_14 float-end">
              £ ${rentDetails.moreRentDetails.affordableTotalRent}
              </p>
            </div>
          </div>
        </div> 
              <div class="col-12">
                <div class="w-100 border-t-1">
                  <div class="row p-1">
                    <div class="col-8">
                      <p
                        class="font_16 ff_semi current-color"
                        style={{
                          color: "#000",
                          fontWeight: "600",
                          fontSize: "inherit",
                        }}
                      >
                        Total amount
                      </p>
                    </div>
                    <div class="col-4">
                      <p
                        class="font_16 ff_semi current-color float-end"
                        style={{
                          color: "#000",
                          fontWeight: "600",
                          fontSize: "inherit",
                        }}
                      >
                      £ ${rentDetails.moreRentDetails.totalRent}
                        
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>`}
          buttons={[
            {
              text: "Close",
              role: "cancel",
              cssClass: "exit_popup",
              handler: () => {
                props.setOpenModal(false);
              },
            },
          ]}
        />
      </IonPage>
    </IonContent>
  );
};

export default MoreRentDetails;
