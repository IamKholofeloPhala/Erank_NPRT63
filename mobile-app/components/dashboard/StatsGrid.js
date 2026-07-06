import React from 'react';

import { View, StyleSheet } from 'react-native';

import DashboardCard from '../cards/DashboardCard';

export default function StatsGrid({

availability,

}){

return(

<>

<View style={styles.row}>

<DashboardCard

icon="🚖"

title="Available"

value={availability.taxis.toString()}

subtitle="Taxis Ready"

/>

<DashboardCard

icon="🟢"

title="Queue"

value={availability.queue.toString()}

subtitle="Loading"

/>

</View>

<View style={styles.row}>

<DashboardCard

icon="🕘"

title="Last Taxi"

value={availability.lastTaxi}

subtitle="Today"

/>

<DashboardCard

icon="🛡️"

title="Alerts"

value={availability.alerts.toString()}

subtitle="Active"

/>

</View>

</>

);

}

const styles=StyleSheet.create({

row:{

flexDirection:'row',

},

});