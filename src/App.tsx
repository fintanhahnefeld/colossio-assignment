import React, { useState } from "react";
import {
  IonApp,
  IonHeader,
  IonContent,
  IonToolbar,
  IonTitle,
  IonGrid,
  IonRow,
  IonCol,
  IonItem,
  IonLabel,
  IonInput,
  IonSelect,
  IonSelectOption,
  IonDatetime,
  IonButton,
  IonIcon,
} from "@ionic/react";

import { arrowRedoOutline, calendarClearOutline } from "ionicons/icons";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";

const App: React.FC = () => {
  const [game, setGame] = useState<string>("");
  const [selectedDate, setSelectedDate] = useState<string>("2021-06-25");

  return (
    <IonApp>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Tournament Info</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <form>
          <IonGrid>
            <IonRow>
              <IonCol>
                <IonItem>
                  <IonLabel position="floating">Tournament Name</IonLabel>
                  <IonInput type="text"></IonInput>
                </IonItem>
              </IonCol>
            </IonRow>

            <IonRow>
              <IonCol>
                <IonItem>
                  <IonLabel position="floating">Number of Players</IonLabel>
                  <IonInput type="number"></IonInput>
                </IonItem>
              </IonCol>
            </IonRow>

            <IonRow>
              <IonCol>
                <IonItem>
                  <IonLabel position="floating">Choose a Game</IonLabel>
                  <IonSelect
                    interface="alert"
                    multiple={false}
                    placeholder="Please Select One"
                    onIonChange={(e) => setGame(e.detail.value)}
                    value={game}
                  >
                    <IonSelectOption value="minecraft">
                      MineCraft
                    </IonSelectOption>
                    <IonSelectOption value="fifa">Fifa</IonSelectOption>
                    <IonSelectOption value="tetris">Tetris</IonSelectOption>
                    <IonSelectOption value="league of legends">
                      League of Legends
                    </IonSelectOption>
                    <IonSelectOption value="overwatch">
                      Overwatch
                    </IonSelectOption>
                    <IonSelectOption value="call of duty">
                      Call of Duty
                    </IonSelectOption>
                    <IonSelectOption value="grand theft auto">
                      Grand Theft Auto
                    </IonSelectOption>
                    <IonSelectOption value="pubg">
                      PlayerUnknown's Battlegrounds
                    </IonSelectOption>
                    <IonSelectOption value="mario kart">
                      Mario Kart
                    </IonSelectOption>
                    <IonSelectOption value="wii sports">
                      Wii Sports
                    </IonSelectOption>
                    <IonSelectOption value="other">Other</IonSelectOption>
                  </IonSelect>
                </IonItem>
              </IonCol>
            </IonRow>

            <IonRow>
              <IonCol>
                <IonItem>
                  <IonLabel>Date</IonLabel>
                  <IonDatetime
                    displayFormat="MMM DD, YYYY"
                    min="2021"
                    max="2025"
                    value={selectedDate}
                    onIonChange={(e) => setSelectedDate(e.detail.value!)}
                  ></IonDatetime>
                </IonItem>
              </IonCol>
            </IonRow>

            <IonRow className="ion-text-center ion-padding-top">
              <IonCol>
                <IonButton>
                  <IonIcon slot="start" icon={arrowRedoOutline} />
                  Submit
                </IonButton>
              </IonCol>
              <IonCol>
                <IonButton>
                  <IonIcon slot="start" icon={calendarClearOutline} />
                  Clear
                </IonButton>
              </IonCol>
            </IonRow>
          </IonGrid>
        </form>
      </IonContent>
    </IonApp>
  );
};

export default App;
