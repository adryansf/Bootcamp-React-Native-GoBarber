import React, { useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '~/services/api';

import Background from '~/components/Background';
import Appointment from '~/components/Appointment';

import { Container, Title, List } from './styles';

export default function Dashboard({ navigation }) {
  const [appointments, setAppointments] = useState([]);

  async function loadAppointments() {
    const { data } = await api.get('appointments');

    setAppointments(data);
  }

  useEffect(() => {
    navigation.addListener('focus', () => {
      loadAppointments();
    });
  }, [navigation]);

  async function handleCancel(id) {
    const response = await api.delete(`appointments/${id}`);

    setAppointments(
      appointments.map(appointment =>
        appointment.id === id
          ? {
              ...appointment,
              canceled_at: response.data.canceled_at,
            }
          : appointment
      )
    );
  }

  return (
    <Background>
      <Container>
        <Title>Agendamentos</Title>
        <List
          data={appointments}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <Appointment onCancel={() => handleCancel(item.id)} data={item} />
          )}
        />
      </Container>
    </Background>
  );
}

export const options = {
  tabBarLabel: 'Agendamentos',
  tabBarIcon: ({ color }) => {
    return <Icon name="event" size={20} color={color} />;
  },
};